import React, { useState, useEffect } from "react";
import API from "../services/api-services";

function MovieForm({ movie, setUpdatedMovie, setNewMovie }) {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);

  useEffect(() => {
    setTitle(movie.title);
    setDescription(movie.description);
  }, [movie]);

  const saveMovie = async () => {
    const response = await API.updateMovie(movie.id, { title, description });
    if (response) {
      setUpdatedMovie(response);
    }
  };

  const createMovie = async () => {
    const resp = await API.createMovie({ title, description });
    if (resp) {
      setNewMovie(resp);
    }
  };

  return (
    <React.Fragment>
      {movie && (
        <div className="grid grid-cols-2 gap-2">
          <label htmlFor="title">Title</label>
          <input
            id="description"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            className="text-gray-700"
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
            className="text-gray-700"
          />
          {movie.id ? (
            <button onClick={saveMovie}>Update Movie</button>
          ) : (
            <button onClick={createMovie}>Add a Movie</button>
          )}
        </div>
      )}
    </React.Fragment>
  );
}

export default MovieForm;
