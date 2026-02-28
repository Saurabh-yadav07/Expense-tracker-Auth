
const API_KEY = "AIzaSyBNBQtI52p3uPPGtdrCRHlzvSsBqhS8ZNM";

const BASE_URL =
  "https://identitytoolkit.googleapis.com/v1";

export async function signupUser(email, password) {
  const response = await fetch(
    `${BASE_URL}/accounts:signUp?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  const data = await response.json();
  if (!response.ok) throw new Error(data.error.message);

  return data;
}

export async function loginUser(email, password) {
  const response = await fetch(
    `${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  const data = await response.json();
  if (!response.ok) throw new Error(data.error.message);

  return data;
}