const genderOptions = ["", "male", "female"];
const usersPerPageOptions = [10, 25, 50, 100];

function Filter({
  genderFilter,
  setGenderFilter,
  usersPerPage,
  setUsersPerPage,
}) {
  return (
    <div className="mb-4">
      <label htmlFor="genderFilter" className="mr-2">
        Filter by gender:
      </label>
      <select
        id="genderFilter"
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
        className="border p-2 mr-4"
      >
        {genderOptions.map((option) => (
          <option key={option} value={option}>
            {option === ""
              ? "All"
              : option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
      <label htmlFor="usersPerPage" className="mr-2">
        Users per page:
      </label>
      <select
        id="usersPerPage"
        value={usersPerPage}
        onChange={(e) => setUsersPerPage(Number(e.target.value))}
        className="border p-2"
      >
        {usersPerPageOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
