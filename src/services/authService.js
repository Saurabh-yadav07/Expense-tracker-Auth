const API_KEY = "AIzaSyBNBQtI52p3uPPGtdrCRHlzvSsBqhS8ZNM";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1";

/* ===============================
   SIGNUP USER
================================ */

export async function signupUser(email, password) {
  const response = await fetch(
    `${BASE_URL}/accounts:signUp?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data;
}

/* ===============================
   LOGIN USER
================================ */

export async function loginUser(email, password) {
  const response = await fetch(
    `${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data;
}

/* ===============================
   UPDATE PROFILE
================================ */

export async function updateUserProfile(idToken, displayName, photoUrl) {
  const response = await fetch(
    `${BASE_URL}/accounts:update?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idToken,
        displayName,
        photoUrl,
        returnSecureToken: true
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data;
}

/* ===============================
   GET USER PROFILE
================================ */

export async function getUserProfile(idToken) {
  const response = await fetch(
    `${BASE_URL}/accounts:lookup?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idToken
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data.users[0];
}

/* ===============================
   SENDING EMAIL VERIFICATION
================================ */

export async function sendEmailVerification(idToken) {
  const response = await fetch(
    `${BASE_URL}/accounts:sendOobCode?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        requestType: "VERIFY_EMAIL",
        idToken
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error.message);
  }

  return data;
}