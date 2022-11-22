import { Card } from "./../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from './ExpensesChart';

export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};
