import useFilters from "../../hooks/useFilters";
import useCountries from "../../hooks/queries/useCountries";

const Countries = () => {
  const { data } = useCountries();
  const { toggleFilters, currentFilters } = useFilters();
  return (
    <select
      name="countries"
      id="countries"
      onChange={(e) => toggleFilters("region", e.currentTarget.value)}
      defaultValue={currentFilters.region}>
      {data.map((country) => (
        <option key={country.iso_3166_1} value={country.iso_3166_1}>
          {country.english_name}
        </option>
      ))}
    </select>
  );
};

export default Countries;
