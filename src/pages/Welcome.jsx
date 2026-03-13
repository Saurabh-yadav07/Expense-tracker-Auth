import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const submitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      money,
      description,
      category
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    // clear inputs
    setMoney("");
    setDescription("");
    setCategory("");
  };

  return (

    <div className="auth-container">

      {/* Top Section */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>

        <h2>Welcome</h2>

        <button onClick={logoutHandler}>
          Logout
        </button>

      </div>

      <h3 style={{marginTop:"20px"}}>Add Daily Expense</h3>

      {/* Expense Form */}
      <form onSubmit={submitHandler}>

        <input
          type="number"
          placeholder="Money spent"
          value={money}
          onChange={(e)=>setMoney(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          required
        />

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Salary">Salary</option>
          <option value="Shopping">Shopping</option>
        </select>

        <button type="submit">
          Add Expense
        </button>

      </form>

      {/* Expense List */}

      <div style={{marginTop:"30px"}}>

        <h3>Your Expenses</h3>

        {expenses.length === 0 && <p>No expenses added yet</p>}

        {expenses.map((expense) => (
          <div
            key={expense.id}
            style={{
              border:"1px solid #ddd",
              padding:"10px",
              marginTop:"10px",
              borderRadius:"6px",
              display:"flex",
              justifyContent:"space-between"
            }}
          >
            <span>₹ {expense.money}</span>
            <span>{expense.description}</span>
            <span>{expense.category}</span>
          </div>
        ))}

      </div>

    </div>

  );
}

export default Welcome;