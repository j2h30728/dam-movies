import styled from "styled-components";

import useFilters from "../../hooks/useFilters";
import useCountries from "../../hooks/queries/useCountries";

const Countries = () => {
  const { data } = useCountries();
  const { toggleFilters, currentFilters } = useFilters();
  return (
    <SelectWrapper
      name="countries"
      id="countries"
      onChange={(e) => toggleFilters("region", e.currentTarget.value)}
      defaultValue={currentFilters.region}>
      {data.map((country) => (
        <ChipItem key={country.iso_3166_1} value={country.iso_3166_1}>
          {country.english_name}
        </ChipItem>
      ))}
    </SelectWrapper>
  );
};

export default Countries;

const SelectWrapper = styled.select`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ChipItem = styled.option`
  padding: 10px 8px;
  border-radius: 50px;
  cursor: pointer;

  white-space: nowrap;
`;
