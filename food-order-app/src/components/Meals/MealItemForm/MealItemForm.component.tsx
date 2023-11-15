"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { Input } from "@/elements/Input/Input.element";

import styles from "./MealItemForm.module.scss";

interface MealItemFormProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

export const MealItemForm: React.FC<MealItemFormProps> = ({
  id,
  onAddToCart,
}) => {
  const [enteredAmount, setEnteredAmount] = useState<number>(1);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim().length === 0) return;

    setEnteredAmount(+event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredAmount < 1 || enteredAmount > 5) return;

    onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        id={`amount_${id}`}
        label={"Amount"}
        type={"number"}
        value={enteredAmount}
        onChange={handleChange}
        minAmount={1}
        maxAmount={5}
        step={1}
      />
      <button>+ Add</button>
    </form>
  );
};
