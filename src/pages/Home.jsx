import React, { useState } from "react";
import AppHeader from "../components/AppHeader";
import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";
import { MOVIES } from "../data/data";

function Home() {
  const [movies, setMovies] = useState(MOVIES);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating === 0 || movie.rating === searchRating)
  );

  const handleAddNewMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };

  return (
    <div>
      {/* Pass props to AppHeader */}
      <AppHeader
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />

      {/* Movie List and Add Movie components */}
      <div className="p-6 bg-gray-900">
        <AddMovie handleAddNewMovie={handleAddNewMovie} />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
}

export default Home;
