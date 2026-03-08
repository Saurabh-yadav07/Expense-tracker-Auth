import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../services/authService";

function LoginForm(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginHandler = async (e)=>{

    e.preventDefault();

    const data = await loginUser(email,password);

    if(data.error){
      alert(data.error.message);
    }
    else{
      localStorage.setItem("idToken",data.idToken);
      navigate("/welcome");
    }

  };

  return(

    <div className="auth-container">

      <form onSubmit={loginHandler}>

        <h2>Login</h2>

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

        <button type="submit">Login</button>

        <p className="auth-link">
          Forgot Password?
          <span onClick={()=>navigate("/forgot-password")}>
            Reset
          </span>
        </p>

        <p className="auth-link">
          Don't have an account?
          <span onClick={()=>navigate("/signup")}>
            Signup
          </span>
        </p>

      </form>

    </div>

  );
}

export default LoginForm;