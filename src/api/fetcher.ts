import apiClient from ".";
import { Filters } from "../hooks/useFilters";
import { Country, DetailMovie, Genre, MovieResponseData, SpokenLanguage } from "../types/movie";
import { makeImagePath } from "../utils/makeImagePath";
import preloadImage from "../utils/preloadImage";
import { updateQueryString } from "../utils/queryString";

export const getListFetcher = async ({
  url,
  pageParam,
  queryObject,
}: {
  url: string;
  pageParam: number;
  queryObject?: Partial<Filters>;
}): Promise<MovieResponseData> => {
  const queryString = updateQueryString({
    ...queryObject,
    page: pageParam,
  });
  const result = await apiClient.get<MovieResponseData>(`${url}${queryString}`);
  return result.data;
};

export const getDetailFetcher = async ({
  movieId,
  languageQueryObject,
}: {
  movieId: string;
  languageQueryObject?: Partial<Filters>;
}): Promise<DetailMovie> => {
  const queryString = updateQueryString({ ...languageQueryObject });
  const { data } = await apiClient<DetailMovie>(`movie/${movieId}${queryString ?? `?language=ko-KR`}`);
  preloadImage(makeImagePath(data.backdrop_path, "w1280"));

  return data;
};

export const getGenres = async (type: "movie") => {
  const { data } = await apiClient.get<{ genres: Genre[] }>(`genre/${type}/list`);
  return data;
};

export const getLanguages = async () => {
  const { data } = await apiClient.get<SpokenLanguage[]>(`configuration/languages`);
  return data;
};

export const getCountries = async () => {
  const { data } = await apiClient.get<Country[]>(`configuration/countries`);
  return data;
};
