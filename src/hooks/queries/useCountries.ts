import { useSuspenseQuery } from "@tanstack/react-query";

import { getCountries } from "../../api/fetcher";

const useCountries = () => {
  return useSuspenseQuery({
    queryKey: [{ scope: "countries" }],
    queryFn: () => getCountries(),
  });
};

export default useCountries;
