import { Card } from "antd";
import { Link } from "react-router";
import MovieRating from "./MovieRating"; // Import the MovieRating component

const { Meta } = Card;

function MovieCard({ id, title, description, posterURL, rating }) {
  // Limit the description to the first 30 characters
  const limitedDescription =
    description.length > 30 ? description.slice(0, 30) + "..." : description;
  return (
    <Link to={`/movie/${id}`} className="no-underline">
      <Card
        hoverable
        cover={
          <img
            className="w-[500px] h-[300px] object-cover"
            alt="example"
            src={posterURL}
          />
        }
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <Meta
          description={
            <div className="flex flex-col gap-3">
              <p>{limitedDescription}</p>
              {/* Use the MovieRating component here */}
              <MovieRating rating={rating} />
            </div>
          }
        />
      </Card>
    </Link>
  );
}

export default MovieCard;
