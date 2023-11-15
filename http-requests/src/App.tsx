import { useCallback, useEffect, useState } from "react";

import { MovieList } from "./components/MoviesList/MoviesList";
import { MovieType } from "./types/Movie.type";
import { HttpResponse } from "./types/HttpResponse.type";
import "./App.css";
import { AddMovie } from "./components/AddMovie/AddMovie";

const API_URL =
  "https://http-requests-app-e6671-default-rtdb.europe-west1.firebasedatabase.app/movies.json";

const App = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleAddMovie = async (movie: MovieType) => {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
  };

  const handleFetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies: MovieType[] = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError((error as Error).message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <AddMovie onAddMovie={handleAddMovie} />
      </section>
      <section>
        <button onClick={handleFetchMovies}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </>
  );
};

export default App;
