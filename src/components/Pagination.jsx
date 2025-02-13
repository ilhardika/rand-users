import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ totalUsers, usersPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevious}
        className={`px-4 py-2 mx-1 border rounded-lg shadow-sm ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClick(pageNumber)}
          className={`px-4 py-2 mx-1 border rounded-lg shadow-sm ${
            currentPage === pageNumber
              ? "bg-blue-500 text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={handleNext}
        className={`px-4 py-2 mx-1 border rounded-lg shadow-sm ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
