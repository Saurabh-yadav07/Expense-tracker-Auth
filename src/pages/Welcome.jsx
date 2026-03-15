import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import {
  addExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
} from "../services/expenseService";

function Welcome() {
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const logoutHandler = () => {
    localStorage.removeItem("idToken");
    navigate("/");
  };

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses();
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  const addOrUpdateExpense = async (expense) => {
    if (editExpense) {
      await updateExpense(editExpense.id, expense);

      setExpenses((prev) =>
        prev.map((exp) =>
          exp.id === editExpense.id ? { id: editExpense.id, ...expense } : exp,
        ),
      );

      setEditExpense(null);
    } else {
      const res = await addExpense(expense);

      const newExpense = {
        id: res.name,
        ...expense,
      };

      setExpenses((prev) => [...prev, newExpense]);
    }
  };

  const deleteHandler = async (id) => {
    await deleteExpense(id);

    console.log("Expense successfuly deleted");

    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const editHandler = (expense) => {
    setEditExpense(expense);
  };

  return (
    <div className="welcome-container">
      <div className="header">
        <h2>Expense Tracker</h2>

        <button className="logout-btn" onClick={logoutHandler}>Logout</button>
      </div>

      <ExpenseForm
        addOrUpdateExpense={addOrUpdateExpense}
        editExpense={editExpense}
      />

      <ExpenseList
        expenses={expenses}
        onDelete={deleteHandler}
        onEdit={editHandler}
      />
    </div>
  );
}

export default Welcome;
