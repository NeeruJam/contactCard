import React from "react";

export default function Star({ isFilled, handleClick }) {
  const starIcon = isFilled ? "filled-star.png" : "empty-star.png";
  return (
    <img
      src={`/${starIcon}`}
      alt=""
      className="card--favorite"
      onClick={handleClick}
    />
  );
}
