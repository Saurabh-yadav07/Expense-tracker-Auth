import {useState} from "react";
import {sendPasswordResetEmail} from "../services/authService";

function ForgotPassword(){

  const [email,setEmail] = useState("");
  const [loading,setLoading] = useState(false);
  const [message,setMessage] = useState("");

  const submitHandler = async (e)=>{

    e.preventDefault();

    setLoading(true);
    setMessage("");

    const data = await sendPasswordResetEmail(email);

    setLoading(false);

    if(data.error){
      setMessage(data.error.message);
    }
    else{
      setMessage("Password reset email sent! Check your inbox.");
    }

  };

  return(

    <div className="auth-container">

      <form onSubmit={submitHandler}>

        <h2>Reset Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          required
          onChange={(e)=>setEmail(e.target.value)}
        />

        <button type="submit">

          {loading ? "Sending..." : "Send Reset Link"}

        </button>

        {message && <p className="auth-link">{message}</p>}

      </form>

    </div>

  );
}

export default ForgotPassword;