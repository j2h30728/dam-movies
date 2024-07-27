import styled from "styled-components";

import useGenresQuery from "../../hooks/queries/useGenresQuery";
import useFilters from "../../hooks/useFilters";

const Genres = () => {
  const { data } = useGenresQuery("movie");
  const { toggleFilters, currentFilters } = useFilters();
  return (
    <ChipWrapper>
      {data.genres.map((genre) => (
        <ChipItem
          key={genre.id}
          $isSelected={
            Array.isArray(currentFilters.with_genres) ? currentFilters.with_genres.includes(genre.id) : false
          }
          onClick={() => toggleFilters("with_genres", [genre.id])}>
          {genre.name}
        </ChipItem>
      ))}
    </ChipWrapper>
  );
};

export default Genres;

const ChipWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ChipItem = styled.button<{ $isSelected: boolean }>`
  padding: 10px 8px;
  border-radius: 50px;
  background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.color.point : theme.color.neutral)};
  color: ${({ theme, $isSelected }) => ($isSelected ? theme.color.background : theme.color.text)};
  cursor: pointer;

  white-space: nowrap;
`;
