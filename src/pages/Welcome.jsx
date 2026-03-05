import { sendEmailVerification } from "../services/authService";

function Welcome() {

  const handleVerifyEmail = async () => {

    try{

      const token = localStorage.getItem("token");

      await sendEmailVerification(token);

      alert("Verification email sent! Please check your inbox.");

    }
    catch(err){

      if(err.message === "INVALID_ID_TOKEN"){
        alert("Session expired. Please login again.");
      }
      else if(err.message === "USER_DISABLED"){
        alert("User account disabled.");
      }
      else{
        alert("Failed to send verification email.");
      }

    }

  }

  return(

    <div className="auth-container">

      <h2>Welcome to Expense Tracker</h2>

      <p>Your profile is incomplete</p>

      <button onClick={handleVerifyEmail}>
        Verify Email
      </button>

    </div>

  )

}

export default Welcome;