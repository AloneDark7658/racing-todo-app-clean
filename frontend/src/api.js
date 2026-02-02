const API_URL = "https://todo-backend-bg0y.onrender.com";

/* AUTH */
export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const register = async (username, email, password) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  return res.json();
};

/* TODOS */
export const getTodos = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const createTodo = async (data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data), // { title }
  });

  return res.json();
};

export const updateTodo = async (id, data) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data), // { title?, completed? }
  });

  return res.json();
};

export const deleteTodo = async (id) => {
  const token = localStorage.getItem("token");

  await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

/* LOGS (ADMIN) */
export const getLogs = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/logs`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
