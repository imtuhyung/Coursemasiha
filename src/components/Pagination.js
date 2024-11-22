// src/components/Pagination.js
import React from "react";
import "./Styles.css";
const Pagination = ({ totalCourses, coursesPerPage, setCurrentPage }) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalCourses / coursesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <nav>
      <ul className="pagination">
        <button onClick={handlePrevious} disabled={setCurrentPage === 1}>
          &lt; {/* Left Arrow */}
        </button>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </li>
        ))}
        <button onClick={handleNext} disabled={setCurrentPage === totalPages}>
          &gt; {/* Right Arrow */}
        </button>
      </ul>
    </nav>
  );
};

export default Pagination;
