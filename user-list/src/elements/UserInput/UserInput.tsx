import { ChangeEvent } from "react";

import styles from "./UserInput.module.scss";

interface UserInputProps {
  inputType: "text" | "number";
  title: string;
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UserInput: React.FC<UserInputProps> = ({
  inputType,
  title,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {title}
      </label>
      <input
        className={styles.input}
        type={inputType}
        name={name}
        min={0}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
