import React from "react";
import { useParams, Link, useNavigate } from "react-router";
import { MOVIES } from "../data/data";
import { Button } from "antd";
import MovieRating from "../components/MovieRating"; // Import the MovieRating component
import { IoPlayCircleOutline } from "react-icons/io5";

function MovieDescription() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate

  const movie = MOVIES.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div className="container mx-auto p-6 relative">
      {/* Movie Section with Poster and Details */}
      <section
        className="flex flex-col md:flex-row relative z-10 rounded-lg shadow-lg gap-8 md:gap-20"
        style={{
          backgroundImage: `url(${movie.posterURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Image Section */}
        <div className="md:w-[600px] w-full" style={{ height: "400px" }}>
          <img
            alt={movie.title}
            src={movie.posterURL}
            className="w-full h-full object-cover object-center rounded-br-none rounded-tr-none shadow-lg"
          />
        </div>

        {/* Movie Overview Section */}
        <div className="md:ml-6 text-white/80 w-full py-6 px-4">
          {/* Movie Title */}
          <h2 className="text-3xl font-semibold my-4 text-center md:text-left">
            {movie.title}
          </h2>
          <p className="text-xl font-semibold">Overview</p>
          <p className="text-lg mb-6">{movie.description}</p>

          {/* Movie Rating */}
          <div className="my-4">
            <MovieRating rating={movie.rating} />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            {/* Watch Trailer Button */}
            <div className="mt-4">
              <Link to={`/movie/${id}/trailer`}>
                <Button
                  type="primary"
                  size="large"
                  icon={<IoPlayCircleOutline />}
                  block
                >
                  Watch Trailer
                </Button>
              </Link>
            </div>

            {/* Back to Home Button */}
            <div className="mt-4">
              <Button
                type="default"
                size="large"
                block
                onClick={() => navigate("/")} // Navigate to the home page
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>

        {/* Overlay for the section */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/80 -z-10" />
      </section>

      {/* Global Overlay for the Page (for additional darkening effect) */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 h-full" />
    </div>
  );
}

export default MovieDescription;
