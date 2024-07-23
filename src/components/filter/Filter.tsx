import styled from "styled-components";
import Countries from "../movie/Countries";
import Genres from "../movie/Genres";
import Languages from "../movie/Languages";
import SortType from "../movie/SortType";

const Filter = () => {
  return (
    <FilterWrapper>
      <FilterItem>
        <Title>정렬</Title>
        <SortType />
      </FilterItem>
      <FilterItem>
        <Title>나라</Title>
        <Countries />
      </FilterItem>
      <FilterItem>
        <Title>언어</Title>
        <Languages />
      </FilterItem>
      <FilterItem>
        <Title>장르</Title>
        <Genres />
      </FilterItem>
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  width: 100px;
`;
