import { ChangeEvent } from "react";

import styles from "./Input.module.scss";

interface InputProps {
  id: string;
  label: string;
  type: "number";
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  minAmount?: number;
  maxAmount?: number;
  step?: number;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  minAmount,
  maxAmount,
  step,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        min={minAmount}
        max={maxAmount}
        step={step}
      />
    </div>
  );
};
