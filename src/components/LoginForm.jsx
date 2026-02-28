
import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required.");
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser(email, password);

      // Store token
      localStorage.setItem("token", data.idToken);

      navigate("/welcome");

    } catch (err) {
      if (err.message === "EMAIL_NOT_FOUND") {
        alert("Email not found.");
      } else if (err.message === "INVALID_PASSWORD") {
        alert("Wrong password.");
      } else {
        alert("Invalid credentials.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;