import { useState } from "react";

function CompleteProfileForm(){

  const [name,setName] = useState("");
  const [photo,setPhoto] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault();

    alert("Profile updated!");
  };

  return(

    <div className="auth-container">

      <form onSubmit={submitHandler}>

        <h2>Complete Profile</h2>

        <input
          type="text"
          placeholder="Full Name"
          required
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Profile Photo URL"
          required
          onChange={(e)=>setPhoto(e.target.value)}
        />

        <button type="submit">Update Profile</button>

      </form>

    </div>

  );
}

export default CompleteProfileForm;