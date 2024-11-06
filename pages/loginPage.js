import { Login, loginOnMount } from "../components/Login.js";

const loginPage = async () => {
  const loginPageContent = `
  ${Login()}
  `;

  const root = document.getElementById("root");
  root.innerHTML = loginPageContent;

  loginOnMount();
};

export { loginPage };
