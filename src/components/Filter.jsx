import { RefreshCw } from "lucide-react";

function Filter({
  genderFilter,
  setGenderFilter,
  usersPerPage,
  setUsersPerPage,
  onResetFilters,
}) {
  return (
    <div className="mb-4 p-4 bg-light rounded">
      <div className="row align-items-center g-3">
        <div className="col-12 col-sm-auto">
          <div className="d-flex align-items-center">
            <label htmlFor="genderFilter" className="form-label me-3 mb-0">
              Gender:
            </label>
            <select
              id="genderFilter"
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="form-select"
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-auto">
          <div className="d-flex align-items-center">
            <label htmlFor="usersPerPage" className="form-label me-3 mb-0">
              Show:
            </label>
            <select
              id="usersPerPage"
              value={usersPerPage}
              onChange={(e) => setUsersPerPage(Number(e.target.value))}
              className="form-select"
            >
              {[10, 25, 50, 100].map((option) => (
                <option key={option} value={option}>
                  {option} rows
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="col-12 col-sm-auto ms-sm-auto">
          <button
            onClick={onResetFilters}
            className="btn btn-outline-secondary d-flex align-items-center gap-2"
          >
            <RefreshCw size={16} />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
