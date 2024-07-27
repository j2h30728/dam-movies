import styled from "styled-components";

import Countries from "./Countries";
import Genres from "./Genres";
import Languages from "./Languages";
import SortType from "./SortType";

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
  gap: 10px;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  width: 60px;
  font-weight: 600;
`;
