import React from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    console.log("Expense deleted");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={props.amount}
        title={props.title}
        location={props.location}
      />
      <button className="deleteButton" onClick={deleteHandler}>
        Delete
      </button>
    </Card>
  );
};

export default ExpenseItem;
