import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ totalUsers, usersPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

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

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            aria-label="Previous page"
            type="button"
          >
            <ChevronLeft size={18} />
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index + 1}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(index + 1)}
              type="button"
            >
              {index + 1}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            type="button"
          >
            <ChevronRight size={18} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
