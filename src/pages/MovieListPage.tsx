import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import { movieListEndpoint } from "../constants/movie";
import Spinner from "../components/Spinner";
import useMovieListInfiniteQuery from "../hooks/queries/useMovieListInfiniteQuery";
import MovieList from "../components/movie/MovieList";

const InfiniteMovieList = () => {
  const { pathname } = useLocation();
  const currentMovieListType = movieListEndpoint(pathname);
  const { data, targetItemRef, isFetchingNextPage } = useMovieListInfiniteQuery(currentMovieListType, {
    language: "ko-KR",
    region: "KR",
  });

  return (
    <>
      <MovieList listData={data} listType={currentMovieListType} />
      <div ref={targetItemRef}>{isFetchingNextPage ? <Spinner size={50} /> : null}</div>
    </>
  );
};

const MovieListPage = () => {
  return (
    <AnimatePresence>
      <ListWrapper>
        <Suspense fallback={<Spinner />}>
          <InfiniteMovieList />
        </Suspense>
        <Outlet />
      </ListWrapper>
    </AnimatePresence>
  );
};

export default MovieListPage;

const ListWrapper = styled.div`
  width: calc(100vw - 50px);
  height: 100vh;
  margin-top: 50px;
`;
