import { clsx } from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  onClick,
}) => {
  return (
    <button className={styles.container} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
