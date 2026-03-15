import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete, onEdit }) {
  return (
    <div className="expense-list">
      <h3>Your Expenses</h3>

      {expenses.length === 0 && <p>No expenses added yet</p>}

      {expenses.map((exp) => (
        <ExpenseItem
          key={exp.id}
          expense={exp}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
