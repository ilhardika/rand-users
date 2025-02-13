function Pagination({ totalUsers, usersPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleClick(index + 1)}
          className={`px-4 py-2 mx-1 border rounded ${
            currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
