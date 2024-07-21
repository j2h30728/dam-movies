import { useEffect } from "react";

const useLockBodyScroll = () => {
  useEffect(() => {
    const scrollWidth = window.innerWidth - document.body.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollWidth}px`;

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, []);
};

export default useLockBodyScroll;
