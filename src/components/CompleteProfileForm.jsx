import { useState } from "react";
import { updateUserProfile } from "../services/authService";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
  const [fullName, setFullName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !photoUrl) {
      alert("All fields are required.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await updateUserProfile(token, fullName, photoUrl);

      alert("Profile updated successfully!");

      navigate("/welcome");

    } catch (err) {
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Complete Your Profile</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Profile Photo URL"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
}

export default CompleteProfileForm;