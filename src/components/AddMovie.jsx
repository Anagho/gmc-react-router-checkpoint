import React, { useState } from "react";
import { Button, Modal, Input, message, Select } from "antd";
import validator from "validator";

const AddMovie = ({ handleAddNewMovie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // State to hold all movie information
  const [movieData, setMovieData] = useState({
    id: "",
    title: "",
    description: "",
    posterURL: "",
    trailerURL: "",
    rating: null,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const errorAlert = (error_message) => {
    messageApi.open({
      type: "error",
      content: error_message,
    });
  };

  const handleOk = () => {
    if (movieData.title.trim().length < 2) {
      errorAlert("Please provide a valid movie title");
      return;
    }

    if (movieData.description.trim().length < 10) {
      errorAlert("Description should be at least 10 characters long");
      return;
    }

    if (validator.isURL(movieData.posterURL) === false) {
      errorAlert("Please provide a valid movie poster URL");
      return;
    }

    if (validator.isURL(movieData.trailerURL) === false) {
      errorAlert("Please provide a valid movie trailer URL");
      return;
    }

    if (movieData.rating === null) {
      errorAlert("Please select a movie rating");
      return;
    }

    const MOVIE_TO_ADD = {
      ...movieData,
      id: Math.floor(Math.random() * 99999),
    };

    handleAddNewMovie(MOVIE_TO_ADD);

    // Reset the form
    setMovieData({
      id: "",
      title: "",
      description: "",
      posterURL: "",
      rating: null,
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button className="m-6 " type="primary" onClick={showModal}>
        Add New Movie
      </Button>
      <Modal
        title="Add Movie Information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="flex flex-col gap-4">
          <Input
            value={movieData.title}
            onChange={(event) =>
              setMovieData({ ...movieData, title: event.target.value })
            }
            placeholder="Enter movie title"
          />
          <Input.TextArea
            value={movieData.description}
            onChange={(event) =>
              setMovieData({ ...movieData, description: event.target.value })
            }
            placeholder="Enter movie description"
          />
          <Input
            value={movieData.posterURL}
            onChange={(event) =>
              setMovieData({ ...movieData, posterURL: event.target.value })
            }
            placeholder="Movie poster URL"
          />

          <Select
            placeholder="Select movie rating"
            style={{ width: "100%" }}
            value={movieData.rating}
            onChange={(value) => setMovieData({ ...movieData, rating: value })}
            options={[
              { value: 1, label: "1 Star" },
              { value: 2, label: "2 Stars" },
              { value: 3, label: "3 Stars" },
              { value: 4, label: "4 Stars" },
              { value: 5, label: "5 Stars" },
            ]}
          />
          <Input
            value={movieData.trailerURL}
            onChange={(event) =>
              setMovieData({ ...movieData, trailerURL: event.target.value })
            }
            placeholder="Movie Trailer URL"
          />
        </form>
      </Modal>
    </>
  );
};

export default AddMovie;
