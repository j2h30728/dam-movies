import { useSuspenseQuery } from "@tanstack/react-query";

import { getGenres } from "../../api/fetcher";

const useGenresQuery = (type: "movie") => {
  return useSuspenseQuery({
    queryKey: [{ scope: "movies", type }],
    queryFn: () => getGenres(type),
  });
};

export default useGenresQuery;
