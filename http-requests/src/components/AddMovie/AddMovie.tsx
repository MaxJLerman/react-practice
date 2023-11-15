import { FormEvent, useRef } from "react";

import styles from "./AddMovie.module.css";
import { MovieType } from "../../types/Movie.type";

interface AddMovieProps {
  onAddMovie: (movie: MovieType) => void;
}

export const AddMovie: React.FC<AddMovieProps> = ({ onAddMovie }) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // could add validation here...

    const movie: MovieType = {
      id: "",
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    onAddMovie(movie);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};
