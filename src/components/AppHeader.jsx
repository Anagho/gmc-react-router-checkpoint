import React from "react";
import Filter from "./Filter";

function AppHeader({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) {
  return (
    <header
      className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-blue-900/50"></div>

      {/* Text Content */}
      <div className="z-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider py-2 md:py-4">
          Welcome To Movie Hub
        </h1>
        <p className="text-lg md:text-2xl leading-5 md:leading-7 text-white mt-2">
          Home of movies, TV shows, and people to discover. Explore now.
        </p>
      </div>

      {/* Search and Rating Filters */}
      <div className="w-full max-w-sm md:max-w-3xl mt-6 z-10 px-4">
        <Filter
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          searchRating={searchRating}
          setSearchRating={setSearchRating}
        />
      </div>
    </header>
  );
}

export default AppHeader;
