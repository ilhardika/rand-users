import { RefreshCw } from "lucide-react";

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
    <div className="mb-6 flex flex-wrap items-center gap-4 p-4 bg-gray-50 rounded-xl">
      <div className="flex items-center">
        <label
          htmlFor="genderFilter"
          className="text-gray-700 font-medium mr-3"
        >
          Gender:
        </label>
        <select
          id="genderFilter"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="min-w-[120px] py-2 px-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="flex items-center">
        <label
          htmlFor="usersPerPage"
          className="text-gray-700 font-medium mr-3"
        >
          Show:
        </label>
        <select
          id="usersPerPage"
          value={usersPerPage}
          onChange={(e) => setUsersPerPage(Number(e.target.value))}
          className="min-w-[100px] py-2 px-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        >
          {[10, 25, 50, 100].map((option) => (
            <option key={option} value={option}>
              {option} rows
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onResetFilters}
        className="ml-auto flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Reset</span>
      </button>
    </div>
  );
}

export default Filter;
