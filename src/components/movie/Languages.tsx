import styled from "styled-components";

import useFilters from "../../hooks/useFilters";
import useLanguages from "../../hooks/queries/useLanguages";

const Languages = () => {
  const { data } = useLanguages();
  const { toggleFilters, currentFilters } = useFilters();
  console.log(currentFilters.language);
  return (
    <SelectWrapper
      name="languages"
      onChange={(e) => toggleFilters("language", e.currentTarget.value)}
      defaultValue={currentFilters.language}>
      {data.map((language) => (
        <ChipItem key={language.iso_639_1} value={language.iso_639_1}>
          {language.english_name}
        </ChipItem>
      ))}
    </SelectWrapper>
  );
};

export default Languages;

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
