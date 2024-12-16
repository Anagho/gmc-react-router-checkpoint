import React from "react";
import { FaStar } from "react-icons/fa";

function MovieRating({ rating }) {
  return (
    <div className="flex items-center text-lg">
      <strong>Rating:</strong>
      <div className="flex ml-2">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} color={index < rating ? "gold" : "lightgray"} />
        ))}
      </div>
      <span className="ml-2">({rating})</span>
    </div>
  );
}

export default MovieRating;
