import { ChangeEvent } from "react";

import styles from "./UserInput.module.scss";

interface UserInputProps {
  title: string;
  inputType: "number";
  name: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UserInput: React.FC<UserInputProps> = ({
  title,
  inputType,
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
        required={true}
        min={0}
        value={value!}
        onChange={onChange}
      />
    </div>
  );
};
