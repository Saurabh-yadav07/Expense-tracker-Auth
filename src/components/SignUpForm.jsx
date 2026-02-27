// src/components/SignupForm.jsx

import { useState } from "react";
import { signupUser } from "../services/authService";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const data = await signupUser(email, password);

      console.log("User has successfully signed up.");
      console.log(data);

    } catch (err) {
      handleError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleError = (message) => {
    switch (message) {
      case "EMAIL_EXISTS":
        setError("Email already registered.");
        break;
      case "INVALID_EMAIL":
        setError("Invalid email address.");
        break;
      case "WEAK_PASSWORD : Password should be at least 6 characters":
        setError("Password should be at least 6 characters.");
        break;
      default:
        setError("Something went wrong.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default SignupForm;