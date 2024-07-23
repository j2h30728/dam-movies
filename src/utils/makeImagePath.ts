import { updateQueryString } from "./queryString";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

type ImageFormat = "original" | "w300" | "w500" | "w1280";

type ImageLanguageQuery = {
  language: string;
  include_image_language: string;
};

export function makeImagePath(imagePath: string, format: ImageFormat, language: string) {
  const imageLanguageQuery: ImageLanguageQuery = { language, include_image_language: language };
  const queryString = updateQueryString(imageLanguageQuery);

  return `${IMAGE_BASE_URL}${format}/${imagePath}${queryString}`;
}
