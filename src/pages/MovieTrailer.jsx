import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router"; 
import { MOVIES } from "../data/data";
import { Button, Spin } from "antd"; // Import Spin for loading spinner

function MovieTrailer() {
  const { id } = useParams(); // Get the movie ID from the URL
  const navigate = useNavigate();
  const movie = MOVIES.find((movie) => movie.id === parseInt(id)); // Find the movie by ID

  // Loading state
  const [loading, setLoading] = useState(true); // Initially, trailer is loading

  useEffect(() => {
    // Simulate trailer loading
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds (simulate delay)
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  if (!movie) {
    return <h2>Trailer not found</h2>; // Handle invalid movie ID
  }

  const handleGoHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="container mx-auto p-6 z-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-200 font-semibold mb-6 text-center sm:text-left my-2">
        Watch Trailer: {movie.title}
      </h1>

      {/* Show loading spinner while the trailer is loading */}
      {loading ? (
        <div className="flex justify-center items-center">
          <Spin size="large" /> {/* Ant Design loading spinner */}
        </div>
      ) : (
        <div className="video-container">
          <iframe
            width="100%"
            height="400"
            src={movie.trailerURL}
            title={`${movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Go back home button */}
      <div className="mt-6 text-center">
        <Button type="primary" onClick={handleGoHome}>
          Go Back Home
        </Button>
      </div>

      {/* Overlay for the page */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 -z-10"></div>
    </div>
  );
}

export default MovieTrailer;
