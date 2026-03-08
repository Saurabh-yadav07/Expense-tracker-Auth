const API_KEY = "AIzaSyBNBQtI52p3uPPGtdrCRHlzvSsBqhS8ZNM";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1";

export const signupUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/accounts:signUp?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  });

  return res.json();
};

export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true
    })
  });

  return res.json();
};

export const verifyEmail = async (token) => {
  const res = await fetch(`${BASE_URL}/accounts:sendOobCode?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      requestType: "VERIFY_EMAIL",
      idToken: token
    })
  });

  return res.json();
};

export const updateProfile = async (token, name, photo) => {
  const res = await fetch(`${BASE_URL}/accounts:update?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      idToken: token,
      displayName: name,
      photoUrl: photo,
      returnSecureToken: true
    })
  });

  return res.json();
};

export const getProfile = async (token) => {
  const res = await fetch(`${BASE_URL}/accounts:lookup?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      idToken: token
    })
  });

  return res.json();
};

/* FOR FORGOT PASSWORD */

export const sendPasswordResetEmail = async (email) => {
  const res = await fetch(`${BASE_URL}/accounts:sendOobCode?key=${API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      requestType: "PASSWORD_RESET",
      email: email
    })
  });

  return res.json();
};