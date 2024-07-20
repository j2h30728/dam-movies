import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getListFetcher } from "../../api/fetcher";
import useIntersectionObserver from "../useIntersectionObserver";
import { buildQueryString } from "../../utils/queryString";
import { MovieListType } from "../../constants/movie";

const useMovieListInfiniteQuery = (movieListType: MovieListType, queryParams?: Record<string, string>) => {
  const queryString = buildQueryString(queryParams || {});
  const url = `movie/${movieListType}${queryString}`;

  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: [{ scope: "movies", movieListType, queryParams }],
    queryFn: ({ pageParam }) => getListFetcher({ url, pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => (lastPage.page <= lastPage.total_pages ? lastPage.page + 1 : undefined),
  });

  const { targetItemRef } = useIntersectionObserver<HTMLDivElement>(fetchNextPage);
  const lists = data?.pages.flatMap((page) => page.results);

  return { data: lists, targetItemRef, isFetchingNextPage };
};

export default useMovieListInfiniteQuery;
