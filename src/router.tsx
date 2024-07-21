import { createBrowserRouter } from "react-router-dom";

import Provider from "./Provider";
import ErrorPage from "./pages/ErrorPage";
import MovieListPage from "./pages/MovieListPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import DiscoverMovieListPage from "./pages/DiscoverMovieListPage";

const router = createBrowserRouter([
  {
    element: <Provider />,
    errorElement: <ErrorPage />,
    path: "/",
    children: [
      {
        element: <DiscoverMovieListPage />,
        path: "discover",
        children: [
          {
            element: <MovieDetailPage />,
            path: "movie/:movieId",
          },
        ],
      },
      {
        element: <MovieListPage />,
        path: ":movieListType?",
        children: [
          {
            element: <MovieDetailPage />,
            path: "movie/:movieId",
          },
        ],
      },
    ],
  },
]);

export default router;
