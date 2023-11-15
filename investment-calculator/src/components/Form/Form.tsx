"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import { Button } from "@/elements/Button/Button";
import { UserInput } from "@/elements/UserInput/UserInput";
import { InvestmentValues } from "@/types/InvestmentForm.types";

import styles from "./Form.module.scss";

const initialState: InvestmentValues = {
  currentSavings: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
};

interface FormProps {
  onCalculate: (values: InvestmentValues) => void;
}

export const Form: React.FC<FormProps> = ({ onCalculate }) => {
  const [investmentValues, setInvestmentValues] =
    useState<InvestmentValues>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInvestmentValues((previousInvestmentValues) => {
      return { ...previousInvestmentValues, [name]: +value };
    });
  };

  const handleReset = () => {
    setInvestmentValues(initialState);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onCalculate(investmentValues);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <UserInput
          title="Current Savings (£)"
          inputType="number"
          name="currentSavings"
          value={investmentValues.currentSavings}
          onChange={handleChange}
        />
        <UserInput
          title="Yearly Savings (£)"
          inputType="number"
          name="yearlyContribution"
          value={investmentValues.yearlyContribution}
          onChange={handleChange}
        />
        <UserInput
          title="Expected Interest (%, per year)"
          inputType="number"
          name="expectedReturn"
          value={investmentValues.expectedReturn}
          onChange={handleChange}
        />
        <UserInput
          title="Investment Duration (years)"
          inputType="number"
          name="duration"
          value={investmentValues.duration}
          onChange={handleChange}
        />
      </div>
      <div className={styles.actions}>
        <Button
          type="button"
          text="Reset"
          style="alternate"
          onClick={handleReset}
        />
        <Button type="submit" text="Calculate" style="default" />
      </div>
    </form>
  );
};
