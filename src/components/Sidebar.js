// src/components/Sidebar.js
import React from "react";
import { Coursesdata } from "./Coursesdata"; // Adjust the path as necessary
import "./Styles.css";
const Sidebar = ({ setSelectedPerson }) => {
  // Step 1: Extract unique names from the courses data
  const persons = [...new Set(Coursesdata.map((course) => course.person))];

  // Step 2: Handle person click
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };
  const handleAllCoursesClick = () => {
    setSelectedPerson(null); // Reset to show all courses
  };
  return (
    <div className="sidebar">
      <h2>Courses by Person</h2>
      <ul>
        <li onClick={handleAllCoursesClick}>All Courses</li>
        {/* Add All Courses option */}
        {persons.map((person) => (
          <li key={person} onClick={() => handlePersonClick(person)}>
            {person}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
