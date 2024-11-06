import { route } from "../router.js";
const login = async (username, password) => {
  const response = {};

  const result = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(async (res) => {
    if (res.status === 200 && res.ok) {
      const data = await res.json();
      response.status = true;
      response.data = data;
    } else {
      response.status = false;
    }
  });

  return response;
};

const cekToken = (e) => {
  const token = localStorage.getItem("token");
  if (!token && window.location.pathname !== "/login") {
    route("/login");
  } else {
    route("/");
  }
};
export { login, cekToken };
