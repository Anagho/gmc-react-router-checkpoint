import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import MovieTrailer from "./pages/MovieTrailer";
import MovieDescription from "./pages/MovieDescription";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDescription />} />
        <Route path="/movie/:id/trailer" element={<MovieTrailer />} />
      </Routes>
    </div>
  );
}

export default App;
