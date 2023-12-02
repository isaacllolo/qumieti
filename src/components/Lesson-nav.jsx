import PropTypes from "prop-types";
import React from "react";
import "../styles/Lesson-nav.scss";
import { useNavigate } from 'react-router-dom';

export const LessonButton = ({ property1, className, completed, title, description , lessonId }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/lesson/${lessonId}`);
    };
  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }} className={`lesson-button ${className}`}>
      <div className="text">
        <div className="text-wrapper">{`${title}`}</div>
        <div className="div">{description}</div>
      </div>
      <svg
        className="stroke"
        alt="Stroke"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="26"
        viewBox="0 0 17 26"
        fill="none"
      >
        <path d="M4.1671 21.9888L14.0759 12.8759L4.1671 3.76312" stroke="#BCC4E2"  stroke-linecap="round" stroke-linejoin="bevel"/>
      </svg>
      <div className="group">
        {completed && (
          <div className="check">
            <svg className="vector" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 83" fill="none">
              <path d="M62.4067 29.413C63.6634 30.5687 63.6634 32.4421 62.4067 33.5972L40.8248 53.446C39.5681 54.6011 37.5317 54.6011 36.2751 53.446L26.0012 43.9969C24.7446 42.8418 24.7446 40.9684 26.0012 39.8132C27.2572 38.6575 29.2943 38.6575 30.5503 39.8132L38.5496 47.1699L57.857 29.413C59.1137 28.2578 61.1507 28.2578 62.4067 29.413Z" fill="#FBBC05"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

LessonButton.propTypes = {
  className: PropTypes.string,
  completed: PropTypes.bool,
  lessonId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LessonButton;
