import { useNavigate } from "react-router-dom";

function Welcome(){

  const navigate = useNavigate();

  const logoutHandler = ()=>{

    localStorage.removeItem("idToken");

    navigate("/");

  };

  return(

    <div className="auth-container">

      <div >

        <h2>Welcome</h2>

        <button onClick={logoutHandler}>
          Logout
        </button>

      </div>

      <h1 style={{textAlign:"center",marginTop:"40px"}}>
        You are logged in!
      </h1>

    </div>

  );
}

export default Welcome;