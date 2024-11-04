import { Navbar, navbarOnMount } from "../components/Navbar.js";
import { Jumbotron, jumbotronOnMount } from "../components/Jumbotron.js";
import { BestProducts, bestProductsOnMount } from "../components/BestProducts.js";
import { Category, categoryOnMount } from "../components/Category.js";
import { AllProducts, allProductsOnMount } from "../components/AllProducts.js";
import { Footer } from "../components/Footer.js";

const homePage = async () => {
  const homePageContent = `
    ${Navbar()}
    ${Jumbotron()}
    ${BestProducts()}
    ${Category()}
    ${AllProducts()}
    ${Footer()}
  `;
  const root = document.getElementById("root");
  root.innerHTML = homePageContent;

  await navbarOnMount();
  jumbotronOnMount();
  await bestProductsOnMount();
  await allProductsOnMount();
  categoryOnMount();
};

export { homePage };
