import { Suspense } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import XButton from "../components/XButton";
import { makeImagePath } from "../utils/makeImagePath";
import Spinner from "../components/Spinner";
import useNavigateBack from "../hooks/useNavigateBack";
import useMovieDetailQuery from "../hooks/queries/useMovieDetailQuery";

const MovieDetailInformation = () => {
  const { movieId, movieListType } = useParams();
  const { data: movieDetailData } = useMovieDetailQuery(movieId!);
  const navigateBack = useNavigateBack();

  return (
    <Container onClick={(e) => e.stopPropagation()} layoutId={`${movieListType}-${movieDetailData.id}`}>
      <DetailBanner $src={makeImagePath(movieDetailData.backdrop_path, "original")} />
      <XButton id="xButton" onClick={navigateBack} />
      <Wrapper>
        <h2 id="title">{movieDetailData.title}</h2>
        <span>{movieDetailData.overview}</span>
        <span>Budget: ${movieDetailData.budget.toLocaleString()}</span>
        <span>Revenue: ${movieDetailData.revenue.toLocaleString()}</span>
        <span>Runtime: {movieDetailData.runtime}minutes</span>
        <span>Rating: {movieDetailData.vote_average}</span>
        {movieDetailData?.homepage && (
          <p>
            Homepage: <a href={`${movieDetailData?.homepage}`}>{movieDetailData.homepage}</a>
          </p>
        )}
      </Wrapper>
    </Container>
  );
};

const MovieDetailPage = () => {
  const navigateBack = useNavigateBack();
  const modalElement = document.getElementById("modal")!;

  return createPortal(
    <ModalOverlay onClick={navigateBack}>
      <Suspense fallback={<Spinner />}>
        <MovieDetailInformation />
      </Suspense>
    </ModalOverlay>,
    modalElement
  );
};

export default MovieDetailPage;

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
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  max-width: 900px;
  width: calc(100vw - 15%);
  height: calc(100vh - 20%);
  overflow: hidden;
  position: relative;

  #xButton {
    position: absolute;
    right: 3%;
    top: 3%;
  }
`;

const DetailBanner = styled.div<{ $src: string }>`
  width: 100%;
  height: 100%;
  max-height: 420px;
  background-color: transparent;
  object-fit: cover;
  object-position: center center;

  background-image: url(${(prop) => prop.$src});
  mask-image: linear-gradient(to bottom, #000000, #000000d3, transparent 100%);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  padding: 0 30px;

  #title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  span {
    font-size: 20px;
    font-weight: 400;
  }
`;
