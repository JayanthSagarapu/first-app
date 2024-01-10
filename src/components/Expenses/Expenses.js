import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.title}
        amount={props.amount}
        date={props.date}
        location={props.location}
      />
    </Card>
  );
};

export default Expenses;
