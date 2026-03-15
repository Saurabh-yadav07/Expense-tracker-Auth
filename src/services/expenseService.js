const BASE_URL = "https://expense-tracker-auth-45b78-default-rtdb.firebaseio.com/expenses";

export const addExpense = async (expense) => {

  const res = await fetch(`${BASE_URL}.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expense)
  });

  return res.json();
};

export const getExpenses = async () => {

  const res = await fetch(`${BASE_URL}.json`);
  const data = await res.json();

  const expenses = [];

  for (let key in data) {
    expenses.push({
      id: key,
      ...data[key]
    });
  }

  return expenses;
};


export const deleteExpense = async (id) => {

  const res = await fetch(`${BASE_URL}/${id}.json`, {
    method: "DELETE"
  });

  return res;
};


export const updateExpense = async (id, expense) => {

  const res = await fetch(`${BASE_URL}/${id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(expense)
  });

  return res;
};