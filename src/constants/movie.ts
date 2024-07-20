type NavigateType = Record<"text" | "href", string>[];

export const navigates: NavigateType = [
  {
    text: "POPULAR",
    href: "/",
  },
  { text: "COMING SOON", href: "/coming-soon" },
  { text: "NOW PLAYING", href: "/now-playing" },
];

export const MOVIE_LIST_TYPE = {
  NOW_PLAYING: "now_playing",
  POPULAR: "popular",
  UPCOMING: "upcoming",
  TOP_RATED: "top_rated",
} as const;

export type MovieListType = (typeof MOVIE_LIST_TYPE)[keyof typeof MOVIE_LIST_TYPE];

export const MovieListEndpoint = (movieListType: string) => {
  switch (movieListType) {
    case "coming-soon":
      return MOVIE_LIST_TYPE.UPCOMING;
    case "now-playing":
      return MOVIE_LIST_TYPE.NOW_PLAYING;
    case "top-rated":
      return MOVIE_LIST_TYPE.TOP_RATED;
    case "popular":
      return MOVIE_LIST_TYPE.POPULAR;
    case undefined:
      return MOVIE_LIST_TYPE.POPULAR;
    default:
      throw new Error("잘못된 MovieList type 입니다.");
  }
};