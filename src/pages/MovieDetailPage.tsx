import { Suspense } from "react";
import { createPortal } from "react-dom";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import Spinner from "../components/Spinner";
import useNavigateBack from "../hooks/useNavigateBack";
import useMovieDetailQuery from "../hooks/queries/useMovieDetailQuery";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import { movieListEndpoint } from "../constants/movie";
import useFilters from "../hooks/useFilters";
import MovieDetailInformation from "../components/movie/MovieDetailInfo";

const MovieDetailModalContent = () => {
  const { movieId } = useParams();
  const { pathname } = useLocation();
  const { currentFilters } = useFilters();
  const LanguageQuery = { language: currentFilters.language };
  const { data: movieDetailData } = useMovieDetailQuery(movieId!, LanguageQuery);
  const currentMovieListType = movieListEndpoint(pathname);

  return <MovieDetailInformation movieDetailData={movieDetailData} currentMovieListType={currentMovieListType} />;
};

const MovieDetailModalPage = () => {
  const navigateBack = useNavigateBack();
  const modalElement = document.getElementById("modal")!;
  useLockBodyScroll();

  return createPortal(
    <ModalOverlay onClick={navigateBack}>
      <Suspense fallback={<Spinner />}>
        <MovieDetailModalContent />
      </Suspense>
    </ModalOverlay>,
    modalElement
  );
};

export default MovieDetailModalPage;

const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.backdrop};
`;
