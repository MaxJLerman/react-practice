"use client";

import { useState } from "react";

import { Form } from "@/components/Form/Form";
import { Header } from "@/components/Header/Header";
import { ResultsTable } from "@/components/ResultsTable/ResultsTable";
import { InvestmentValues } from "@/types/InvestmentForm.types";
import { TableData } from "@/types/TableData.types";

const yearlyData: Array<TableData> = []; // per-year results

export default function Home() {
  const [investmentValues, setInvestmentValues] = useState<InvestmentValues>();

  const handleCalculate = (investmentValues: InvestmentValues) => {
    setInvestmentValues(investmentValues);
  };

  if (investmentValues) {
    let currentSavings = investmentValues.currentSavings;
    const yearlyContribution = investmentValues.yearlyContribution;
    const expectedReturn = investmentValues.expectedReturn / 100;
    const duration = investmentValues.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <>
      <Header />
      <Form onCalculate={handleCalculate} />
      {!investmentValues && <span>No investment calculated yet</span>}
      {investmentValues && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={investmentValues.currentSavings}
        />
      )}
    </>
  );
}
