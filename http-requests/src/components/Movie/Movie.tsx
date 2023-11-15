import styles from "./Movie.module.css";

interface MovieProps {
  title: string;
  releaseDate: string;
  openingText: string;
}

export const Movie: React.FC<MovieProps> = ({
  title,
  releaseDate,
  openingText,
}) => {
  return (
    <li className={styles.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};
