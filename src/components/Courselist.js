// src/components/CourseList.js
import React, { useEffect, useState } from "react";
import Courseitems from "./Courseitems";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Coursesdata } from "./Coursesdata";
import "./Styles.css";

const CourseList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState(null); // State for the selected person
  const coursesPerPage = 12; // Adjust as needed
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;

  // Filter courses based on selected person
  const filteredCourses = Coursesdata.filter((course) => {
    const matchesPerson = selectedPerson
      ? course.person === selectedPerson
      : true;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPerson && matchesSearch;
  });
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  return (
    <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sidebar setSelectedPerson={setSelectedPerson} />
      <div className="pagination+grid">
        <Pagination
          totalCourses={filteredCourses.length} // Update total courses for pagination
          coursesPerPage={coursesPerPage}
          setCurrentPage={setCurrentPage}
        />

        <div className="course-grid">
          {currentCourses.map((course) => (
            <Courseitems key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
