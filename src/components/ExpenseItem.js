import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseTitle = "Food";
  const expenseAmount = 100;
  const expenseLocation = "Vizag";

  return (
    <div className="expense-item">
      <div>Expense Item!!</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{expenseLocation}</h2>
        <div className="expense-item__price">Rs{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
