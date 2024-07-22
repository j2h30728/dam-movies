import { useSuspenseQuery } from "@tanstack/react-query";

import { getDetailFetcher } from "../../api/fetcher";
import { Filters } from "../useFilters";

const useMovieDetailQuery = (movieId: string, LanguageQuery: Pick<Filters, "language">) => {
  return useSuspenseQuery({
    queryKey: [{ scope: "movies" }, movieId, LanguageQuery],
    queryFn: () => getDetailFetcher({ movieId, languageQueryObject: LanguageQuery }),
  });
};

export default useMovieDetailQuery;
