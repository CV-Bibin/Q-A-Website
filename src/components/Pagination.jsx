// src/components/Pagination.jsx

import PropTypes from "prop-types";

function Pagination({ currentPage, totalPosts, postsPerPage, paginate }) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-white bg-indigo-600 rounded-l-md hover:bg-indigo-500 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2 text-xl">{currentPage}</span>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-white bg-indigo-600 rounded-r-md hover:bg-indigo-500 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
