// src/components/CourseItem.js
import React from "react";
import "./Styles.css";
const CourseItem = ({ course }) => {
  const handleMoreDetailsClick = () => {
    // Redirect to your Telegram bot URL here
    window.open("https://t.me/CourseMasihaBOT", "_blank");
  };
  return (
    <div className="course-item">
      <div className="image-slider">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-details">
        <div className="course-price">{course.price}</div>
        <div className="course-person">Course by: {course.person}</div>
        <h3>{course.title}</h3>
        <button className="more-details-btn" onClick={handleMoreDetailsClick}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
