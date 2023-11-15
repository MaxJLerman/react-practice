import { clsx } from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  style: "default" | "alternate";
  type: "button" | "submit";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  style,
  type,
  onClick,
}) => {
  const buttonStyle = clsx(styles.container, {
    [styles.default]: style === "default",
    [styles.alternate]: style === "alternate",
  });

  return (
    <button className={buttonStyle} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
