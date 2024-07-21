import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

import useDiscoverMovieListInfiniteQuery from "../hooks/queries/useDiscoverMovieListInfiniteQuery";
import Spinner from "../components/Spinner";
import MovieList from "../components/movie/MovieList";
import { MOVIE_LIST_TYPE } from "../constants/movie";
import Genres from "../components/movie/Genres";
import useFilters from "../hooks/useFilters";

const DiscoverMovieList = () => {
  const { currentFilters } = useFilters();
  const { data, targetItemRef, isFetchingNextPage } = useDiscoverMovieListInfiniteQuery(currentFilters);
  const location = useLocation();
  location.search;
  return (
    <ListWrapper>
      <MovieList listData={data} listType={MOVIE_LIST_TYPE.DISCOVER} key={MOVIE_LIST_TYPE.DISCOVER} />
      <div ref={targetItemRef}>{isFetchingNextPage ? <Spinner size={50} /> : null}</div>
    </ListWrapper>
  );
};

const DiscoverMovieListPage = () => {
  return (
    <AnimatePresence>
      <ListContainer>
        <Suspense>
          <Genres />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <DiscoverMovieList />
        </Suspense>
        <Outlet />
      </ListContainer>
    </AnimatePresence>
  );
};

export default DiscoverMovieListPage;

const ListContainer = styled.div`
  width: calc(100vw - 50px);
  height: 100vh;
`;

const ListWrapper = styled.div`
  margin-top: 50px;
`;
