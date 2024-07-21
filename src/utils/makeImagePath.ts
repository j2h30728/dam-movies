const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

type ImageFormat = "original" | "w300" | "w500" | "w1280";

export function makeImagePath(imagePath: string, format: ImageFormat) {
  return `${IMAGE_BASE_URL}${format}/${imagePath}`;
}
