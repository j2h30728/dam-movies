import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { makeImagePath } from "../../utils/makeImagePath";
import setDefaultImageOnError from "../../utils/setDefaultImageOnError";

import { Movie } from "../../types/movie";
import { MovieListType } from "../../constants/movie";

const MovieList = ({ listData, listType }: { listData: Movie[]; listType: MovieListType | string }) => {
  const { search } = useLocation();
  return (
    <MoviesWrapper initial="hidden" animate="visible" key={listType + search} variants={containerVariants}>
      {listData.map((movie, index) => (
        <MovieItem
          key={`${listType}-${movie.id}-${index}`}
          to={`movie/${movie.id}${search}`}
          layoutId={`${listType}-${movie.id}`}
          whileHover={{
            scale: 1.1,
            transition: {
              delay: 0.1,
              duration: 0.2,
            },
          }}
          variants={itemVariants}>
          <img
            width={300}
            height={450}
            src={makeImagePath(movie.poster_path, "w300", movie.original_language)}
            loading={index > 30 ? "lazy" : "eager"}
            onError={setDefaultImageOnError}
          />
          <h4>{movie.title}</h4>
        </MovieItem>
      ))}
    </MoviesWrapper>
  );
};

export default MovieList;

const MoviesWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  place-items: center;
  gap: 20px;
`;

const MovieItem = styled(motion(Link))`
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
    background-color: ${({ theme }) => theme.color.secondary};
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
