import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import useDiscoverMovieListInfiniteQuery from "../hooks/queries/useDiscoverMovieListInfiniteQuery";
import Spinner from "../components/Spinner";
import MovieList from "../components/movie/MovieList";
import { MOVIE_LIST_TYPE } from "../constants/movie";

const DiscoverMovieList = () => {
  const { data, targetItemRef, isFetchingNextPage } = useDiscoverMovieListInfiniteQuery({
    language: "ko-KR",
    region: "KR",
  });

  return (
    <>
      <MovieList listData={data} listType={MOVIE_LIST_TYPE.DISCOVER} key={MOVIE_LIST_TYPE.DISCOVER} />
      <div ref={targetItemRef}>{isFetchingNextPage ? <Spinner size={50} /> : null}</div>
    </>
  );
};

const DiscoverMovieListPage = () => {
  return (
    <AnimatePresence>
      <ListWrapper>
        <Suspense fallback={<Spinner />}>
          <DiscoverMovieList />
        </Suspense>
        <Outlet />
      </ListWrapper>
    </AnimatePresence>
  );
};

export default DiscoverMovieListPage;

const ListWrapper = styled.div`
  width: calc(100vw - 50px);
  height: 100vh;
`;
