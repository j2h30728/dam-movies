import { useSuspenseQuery } from "@tanstack/react-query";

import { getDetailFetcher } from "../../api/fetcher";

const useMovieDetailQuery = (movieId: string) => {
  return useSuspenseQuery({
    queryKey: [{ scope: "movies", movieId }],
    queryFn: () => getDetailFetcher({ movieId }),
  });
};

export default useMovieDetailQuery;
