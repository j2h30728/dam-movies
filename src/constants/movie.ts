type NavigateType = Record<"text" | "href", string>[];

export const navigates: NavigateType = [
  { text: "DISCOVER", href: "/discover" },
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
  DISCOVER: "discover",
} as const;

export type MovieListType = (typeof MOVIE_LIST_TYPE)[keyof typeof MOVIE_LIST_TYPE];

export const movieListEndpoint = (pathname: string) => {
  const movieListType = pathname.split("/")[1];
  console.log(movieListType);
  switch (movieListType) {
    case "coming-soon":
      return MOVIE_LIST_TYPE.UPCOMING;
    case "now-playing":
      return MOVIE_LIST_TYPE.NOW_PLAYING;
    case "discover":
      return MOVIE_LIST_TYPE.DISCOVER;
    case "movie":
      return MOVIE_LIST_TYPE.POPULAR;
    case "":
      return MOVIE_LIST_TYPE.POPULAR;
    default:
      throw new Error("잘못된 MovieList type 입니다.");
  }
};
