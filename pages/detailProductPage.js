import { Navbar, navbarOnMount } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import { detailProduct, detailProductOnMount } from "../components/detailProduct.js";

export const detailProductPage = async () => {
  const detailProductPageContent = `
  ${Navbar()}
  ${await detailProduct()}
  ${Footer()}
  `;

  const root = document.getElementById("root");
  root.innerHTML = detailProductPageContent;

  navbarOnMount();
  detailProductOnMount();
};
