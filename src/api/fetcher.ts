import apiClient from ".";
import { DetailMovie, Genre, MovieResponseData } from "../types/movie";
import { makeImagePath } from "../utils/makeImagePath";
import preloadImage from "../utils/preloadImage";

export const getListFetcher = async ({
  url,
  pageParam,
}: {
  url: string;
  pageParam: number;
}): Promise<MovieResponseData> => {
  const result = await apiClient.get<MovieResponseData>(`${url}&page=${pageParam}`);
  return result.data;
};

export const getDetailFetcher = async ({ movieId }: { movieId: string }): Promise<DetailMovie> => {
  const { data } = await apiClient<DetailMovie>(`movie/${movieId}?language=ko-KR`);
  preloadImage(makeImagePath(data.backdrop_path, "w1280"));

  return data;
};

export const getMovieGenre = async () => {
  const { data } = await apiClient.get<{ genres: Genre[] }>(`genre/movie/list`);
  return data;
};
