import { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import MovieForm from "./components/MovieForm";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editedMovie, setEditedMovie] = useState(null);
  const [updatedMovie, setUpdatedMovie] = useState(null);
  const [newMovie, setNewMovie] = useState(null);

  const movieClicked = (movie, isEdit) => {
    if (isEdit) {
      setSelectedMovie(null);
      setEditedMovie(movie);
    } else {
      setSelectedMovie(movie);
      setEditedMovie(null);
    }
  };

  const addMovieClicked = () => {
    setSelectedMovie(null);
    setEditedMovie({ title: "", description: "" });
  };

  return (
    <div className="App">
      <header className="App-header border-b-2 border-orange-200 pb-6">
        <h1>Movie Rater</h1>
      </header>

      <div className="grid grid-cols-2 mt-6">
        <div>
          <MovieList
            movieClicked={movieClicked}
            updatedMovie={updatedMovie}
            newMovie={newMovie}
          />
          <button onClick={addMovieClicked}>Add a New Movie</button>
        </div>
        <MovieDetails
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          setUpdatedMovie={setUpdatedMovie}
        />
        {editedMovie && (
          <MovieForm
            movie={editedMovie}
            setUpdatedMovie={setUpdatedMovie}
            setNewMovie={setNewMovie}
          />
        )}
      </div>
    </div>
  );
}

export default App;
