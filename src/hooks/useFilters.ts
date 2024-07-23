import { pipe } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import { parseQueryString, unFlattenObject, updateQueryString } from "../utils/queryString";

interface VoteAverage {
  gte: number;
  lte: number;
}

export interface Filters {
  vote_average?: VoteAverage;
  with_genres?: number[];
  sort_by?: string;
  primary_release_year?: number;
  language?: string;
  region?: string;
}
const initialFilters: Filters = {
  language: window.navigator.language.split("-")[0],
  region: navigator.language.split("-")[1],
  sort_by: "popularity.desc",
};

const useFilters = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const currentFilters: Filters = pipe(
    (s: string) => parseQueryString(s),
    (q: Record<string, string>) => unFlattenObject(q, ["with_genres"]),
    (q: Filters) => ({ ...initialFilters, ...q })
  )(search);
  const currentFiltersQueryString = search;

  const updateFilters = (newFilter: Partial<Filters>) => {
    const updatedFilters = { ...currentFilters, ...newFilter };
    navigate({ search: updateQueryString(updatedFilters) });
  };

  const toggleFilters = <T extends keyof Filters>(key: T, value: Filters[T]) => {
    const updatedFilters = { ...currentFilters };

    if (Array.isArray(updatedFilters[key]) && Array.isArray(value)) {
      const arr = updatedFilters[key];
      const index = arr.indexOf(value[0]);
      if (index >= 0) {
        arr.splice(index, 1);
      } else {
        arr.push(value);
      }
      if (arr.length === 0) delete updatedFilters[key];
    } else {
      if (updatedFilters[key] === value) {
        delete updatedFilters[key];
      } else {
        updatedFilters[key] = value;
      }
    }
    navigate({ search: updateQueryString(updatedFilters) });
  };

  return { currentFilters, toggleFilters, updateFilters, currentFiltersQueryString };
};

export default useFilters;
