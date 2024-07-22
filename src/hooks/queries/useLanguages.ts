import { useSuspenseQuery } from "@tanstack/react-query";

import { getLanguages } from "../../api/fetcher";

const useLanguages = () => {
  return useSuspenseQuery({
    queryKey: [{ scope: "languages" }],
    queryFn: () => getLanguages(),
  });
};

export default useLanguages;
