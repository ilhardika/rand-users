const genderOptions = ["", "male", "female"];
const usersPerPageOptions = [10, 25, 50, 100];

function Filter({
  genderFilter,
  setGenderFilter,
  usersPerPage,
  setUsersPerPage,
  onResetFilters,
}) {
  return (
    <div className="mb-4 flex items-center space-x-4">
      <div>
        <label htmlFor="genderFilter" className="mr-2">
          Filter by gender:
        </label>
        <select
          id="genderFilter"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="border p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {genderOptions.map((option) => (
            <option key={option} value={option}>
              {option === ""
                ? "All"
                : option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="usersPerPage" className="mr-2">
          Users per page:
        </label>
        <select
          id="usersPerPage"
          value={usersPerPage}
          onChange={(e) => setUsersPerPage(Number(e.target.value))}
          className="border p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {usersPerPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={onResetFilters}
        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Reset Filters
      </button>
    </div>
  );
}

export default Filter;
