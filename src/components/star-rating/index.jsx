import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "./star-rating.css";

function StarRating({ starAmount = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    if (index === rating) {
      setRating(0);
      setHover(0);
    } else {
      setRating(index);
      setHover(index);
    }
  };

  const mouseEnter = (index) => {
    if (index <= rating) return;
    setHover(index);
  };

  const mouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {Array.from({ length: starAmount }, (v, i) => (
        <FaStar
          key={i}
          className={i < (hover || rating) ? "filled" : "empty"}
          onClick={() => handleClick(i + 1)}
          onMouseEnter={() => mouseEnter(i + 1)}
          onMouseLeave={() => mouseLeave()}
          size={32}
        />
      ))}
    </div>
  );
}
StarRating.propTypes = {
  starAmount: PropTypes.number,
};

export default StarRating;
