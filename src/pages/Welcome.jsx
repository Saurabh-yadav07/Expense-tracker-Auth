import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h2>Welcome to Expense Tracker</h2>

      <p style={{ marginTop: "20px" }}>
        Your profile is incomplete.
      </p>

      <button
        style={{ marginTop: "15px" }}
        onClick={() => navigate("/complete-profile")}
      >
        Complete Profile
      </button>
    </div>
  );
}

export default Welcome;