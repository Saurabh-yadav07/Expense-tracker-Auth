function ExpenseItem({ expense, onDelete, onEdit }) {
  return (
    <div className="expense-item">
      <span>₹ {expense.money}</span>

      <span>{expense.description}</span>

      <span>{expense.category}</span>

      <div className="expense-actions">
        <button className="edit-btn" onClick={() => onEdit(expense)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(expense.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
