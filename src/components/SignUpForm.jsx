import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";

function SignUpForm(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const submitHandler = async (e)=>{
    e.preventDefault();

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    const data = await signupUser(email,password);

    if(data.error){
      alert(data.error.message);
    }
    else{
      alert("Signup successful!");
      navigate("/");
    }
  };

  return(

    <div className="auth-container">

      <form onSubmit={submitHandler}>

        <h2>Signup</h2>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e)=>setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        <button type="submit">Signup</button>

        <p className="auth-link">
          Already have an account?
          <span onClick={()=>navigate("/")}> Login</span>
        </p>

      </form>

    </div>

  );
}

export default SignUpForm;