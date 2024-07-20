import { useRef, RefObject, useEffect } from "react";

type IntersectionCallback = () => void;

const useIntersectionObserver = <T extends HTMLElement>(
  callback: IntersectionCallback
): { targetItemRef: RefObject<T> } => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetItemRef = useRef<T>(null);

  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    };

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleIntersect);
    }

    if (targetItemRef.current) {
      observerRef.current.observe(targetItemRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback]);

  return { targetItemRef };
};

export default useIntersectionObserver;
