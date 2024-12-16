
import { Input, Select } from "antd";

// Filter movies function
function Filter({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) {
  // Define rating options
  const ratingOptions = [
    { label: "All Ratings", value: 0 },
    { label: "1 Star", value: 1 },
    { label: "2 Stars", value: 2 },
    { label: "3 Stars", value: 3 },
    { label: "4 Stars", value: 4 },
    { label: "5 Stars", value: 5 },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <Input
        placeholder="Search by title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="flex-1 px-4 py-1 rounded-lg"
        size="large"
      />
      {/* <select
        value={searchRating}
        onChange={(e) => setSearchRating(Number(e.target.value))}
        className="border outline-none px-4 py-2 rounded w-full md:w-1/3 cursor-pointer"
      >
        <option value={0}>All Ratings</option>
        {[1, 2, 3, 4, 5].map((rate) => (
          <option key={rate} value={rate}>
            {rate} Star{rate > 1 && "s"}
          </option>
        ))}
      </select> */}

      {/* Ant Design Select for Ratings */}
      <Select
        value={searchRating}
        onChange={(value) => setSearchRating(value)}
        options={ratingOptions}
        className="md:w-1/4"
        size="large"
        placeholder="Select Rating"
      />
    </div>
  );
}

export default Filter;
