import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { getListFetcher } from "../../api/fetcher";
import useIntersectionObserver from "../useIntersectionObserver";
import { Filters } from "../useFilters";

const useDiscoverMovieListInfiniteQuery = (queryObject?: Partial<Filters>) => {
  const url = `discover/movie`;

  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: [{ scope: "movies", queryObject }],
    queryFn: ({ pageParam }) => getListFetcher({ url, pageParam, queryObject }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.page <= lastPage.total_pages ? lastPage.page + 1 : undefined),
  });

  const { targetItemRef } = useIntersectionObserver<HTMLDivElement>(fetchNextPage);
  const lists = data?.pages.flatMap((page) => page.results);

  return { data: lists, targetItemRef, isFetchingNextPage };
};

export default useDiscoverMovieListInfiniteQuery;
