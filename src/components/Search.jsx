import { Search as SearchIcon } from "lucide-react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="position-relative mb-4">
      <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
        <SearchIcon className="text-secondary" size={20} />
      </div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control form-control-lg ps-5"
      />
    </div>
  );
}

export default Search;
