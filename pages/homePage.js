import { Navbar } from "/components/Navbar.js";
import { Jumbotron, jumbotronOnMount } from "../components/Jumbotron.js";
import { BestProducts, bestProductsOnMount } from "../components/BestProducts.js";
import { Category } from "../components/Category.js";
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

  jumbotronOnMount();
  await bestProductsOnMount();
  await allProductsOnMount();
};

export { homePage };
