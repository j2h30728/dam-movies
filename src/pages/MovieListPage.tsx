import { Link, Outlet, useParams } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { MovieListEndpoint } from "../constants/movie";
import Spinner from "../components/Spinner";
import { makeImagePath } from "../utils/makeImagePath";
import useMovieListInfiniteQuery from "../hooks/queries/useMovieListInfiniteQuery";

const MovieList = () => {
  const { movieListType } = useParams();
  const currentMovieListType = MovieListEndpoint(movieListType!) ?? "popular";

  const { data, targetItemRef, isFetchingNextPage } = useMovieListInfiniteQuery(currentMovieListType, {
    language: "en",
  });

  return (
    <>
      <MoviesWrapper initial="hidden" animate="visible" key={movieListType ?? "popular"} variants={containerVariants}>
        {data.map((movie, index) => (
          <Movie
            key={`${movieListType}-${movie.id}-${index}`}
            to={`movie/${movie.id}`}
            layoutId={`${movieListType}-${movie.id}`}
            whileHover={{
              scale: 1.1,
              transition: {
                delay: 0.1,
                duration: 0.2,
              },
            }}
            variants={itemVariants}>
            <img src={makeImagePath(movie.poster_path, "w300")} loading={index > 30 ? "lazy" : "eager"} />
            <h4>{movie.title}</h4>
          </Movie>
        ))}
      </MoviesWrapper>
      <div ref={targetItemRef}>{isFetchingNextPage ? <Spinner size={50} /> : null}</div>
    </>
  );
};

const MovieListPage = () => {
  return (
    <AnimatePresence>
      <ListWrapper>
        <Suspense fallback={<Spinner />}>
          <MovieList />
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
`;

const MoviesWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  place-items: center;
  gap: 20px;
`;

const Movie = styled(motion(Link))`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  width: 200px;

  h4 {
    font-size: 1.3rem;
    height: 30px;
  }

  img {
    border-radius: 10px;
  }
`;

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
