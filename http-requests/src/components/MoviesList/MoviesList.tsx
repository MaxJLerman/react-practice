import { Movie } from "../Movie/Movie";
import { MovieType } from "../../types/Movie.type";
import styles from "./MoviesList.module.css";

interface MovieListProps {
  movies: MovieType[];
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};
