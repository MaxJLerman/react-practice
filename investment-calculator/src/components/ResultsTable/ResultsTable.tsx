import { TableData } from "@/types/TableData.types";
import { moneyFormatter } from "@/utils/general.utils";

import styles from "./ResultsTable.module.scss";

interface ResultsTableProps {
  data: TableData[];
  initialInvestment: number;
}

export const ResultsTable: React.FC<ResultsTableProps> = ({
  data,
  initialInvestment,
}) => {
  return (
    <table className={styles.results}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearData: TableData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{moneyFormatter.format(yearData.savingsEndOfYear)}</td>
            <td>{moneyFormatter.format(yearData.yearlyInterest)}</td>
            <td>
              {moneyFormatter.format(
                yearData.savingsEndOfYear -
                  initialInvestment -
                  yearData.yearlyContribution * yearData.year,
              )}
            </td>
            <td>
              {moneyFormatter.format(
                initialInvestment + yearData.yearlyContribution * yearData.year,
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
