function Search({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 mb-4 w-full"
    />
  );
}

export default Search;
