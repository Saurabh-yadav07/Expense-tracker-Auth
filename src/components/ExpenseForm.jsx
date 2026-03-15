import { useState, useEffect } from "react";

function ExpenseForm({ addOrUpdateExpense, editExpense }) {
  const [money, setMoney] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editExpense) {
      setMoney(editExpense.money);
      setDescription(editExpense.description);
      setCategory(editExpense.category);
    }
  }, [editExpense]);

  const submitHandler = (e) => {
    e.preventDefault();

    const expense = {
      money,
      description,
      category,
    };

    addOrUpdateExpense(expense);

    setMoney("");
    setDescription("");
    setCategory("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Add Expense</h3>

      <input
        type="number"
        placeholder="Money spent"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Petrol">Petrol</option>
        <option value="Salary">Salary</option>
      </select>

      <button type="submit">
        {editExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;
