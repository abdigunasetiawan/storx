import { Navbar, navbarOnMount } from "../components/Navbar.js";
import { SearchProduct, searchProductOnMount } from "../components/SearchProduct.js";
import { Footer } from "../components/Footer.js";

export const searchPage = async () => {
  const searchPageContent = `
  ${Navbar()}
  ${SearchProduct()}
  ${Footer()}
  `;

  const root = document.getElementById("root");
  root.innerHTML = searchPageContent;

  navbarOnMount();
  searchProductOnMount();
};
