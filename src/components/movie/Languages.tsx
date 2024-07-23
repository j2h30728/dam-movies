import useFilters from "../../hooks/useFilters";
import useLanguages from "../../hooks/queries/useLanguages";

const Languages = () => {
  const { data } = useLanguages();
  const { toggleFilters, currentFilters } = useFilters();
  return (
    <select
      name="languages"
      onChange={(e) => toggleFilters("language", e.currentTarget.value)}
      defaultValue={currentFilters.language}>
      {data.map((language) => (
        <option key={language.iso_639_1} value={language.iso_639_1}>
          {language.english_name}
        </option>
      ))}
    </select>
  );
};

export default Languages;
