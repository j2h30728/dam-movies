import useFilters from "../../hooks/useFilters";

const SortType = () => {
  const { toggleFilters, currentFilters } = useFilters();
  return (
    <select
      name="sort_by"
      onChange={(e) => toggleFilters("sort_by", e.currentTarget.value)}
      defaultValue={currentFilters.sort_by}>
      {SORT_TYPE_LIST.map((sortType) => (
        <option key={sortType.value} value={sortType.value}>
          {sortType.label}
        </option>
      ))}
    </select>
  );
};

export default SortType;

const SORT_TYPE_LIST = [
  { value: "original_title.asc", label: "원제목 오름차순" },
  { value: "original_title.desc", label: "원제목 내림차순" },
  { value: "popularity.asc", label: "인기도 낮은순" },
  { value: "popularity.desc", label: "인기도 높은순" },
  { value: "revenue.asc", label: "수익 낮은순" },
  { value: "revenue.desc", label: "수익 높은순" },
  { value: "primary_release_date.asc", label: "개봉일 오름차순" },
  { value: "primary_release_date.desc", label: "개봉일 내림차순" },
  { value: "title.asc", label: "제목 오름차순" },
  { value: "title.desc", label: "제목 내림차순" },
  { value: "vote_average.asc", label: "평균 평점 낮은순" },
  { value: "vote_average.desc", label: "평균 평점 높은순" },
  { value: "vote_count.asc", label: "평가 수 적은순" },
  { value: "vote_count.desc", label: "평가 수 많은순" },
];
