import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addExpense, getExpenses } from "../services/expenseService";

function Welcome() {
  const navigate = useNavigate();

  const [money, setMoney] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);

  const logoutHandler = () => {
    localStorage.removeItem("idToken");
    navigate("/");
  };

  // Getting expenses when page loads
  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses();

      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    const expense = {
      money,
      description,
      category,
    };

    const res = await addExpense(expense);

    if (res.name) {
      const newExpense = {
        id: res.name,
        ...expense,
      };

      setExpenses((prev) => [...prev, newExpense]);
    }

    setMoney("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="auth-container">
      <div >
        <h2>Welcome</h2>

        <button onClick={logoutHandler}>Logout</button>
      </div>

      <h3>Add Expense</h3>

      <form onSubmit={submitHandler}>
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
          <option value="Petrol">Fuel</option>
          <option value="Salary">Shopping</option>
          <option value="Food">Bills</option>
          <option value="Petrol">Tech/Gadgets</option>
          <option value="Salary">Other</option>
        </select>

        <button type="submit">Add Expense</button>
      </form>

      <div style={{ marginTop: "30px" }}>
        <h3>Your Expenses</h3>

        {expenses.map((exp) => (
          <div
            key={exp.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>₹ {exp.money}</span>
            <span>{exp.description}</span>
            <span>{exp.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
