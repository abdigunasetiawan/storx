import { Navbar } from "/components/Navbar.js";
import { Jumbotron, jumbotronOnMount } from "../components/Jumbotron.js";
import { BestProducts, bestProductsOnMount } from "../components/BestProducts.js";
import { Category } from "../components/Category.js";
import { AllProducts, allProductsOnMount } from "../components/AllProducts.js";
import { Footer } from "../components/Footer.js";

const homePage = async () => {
  return `
  ${await Navbar()}
  ${Jumbotron()}
  ${BestProducts()}
  ${Category()}
  ${AllProducts()}
  ${Footer()}
  ${jumbotronOnMount()};
  ${bestProductsOnMount()};
  ${allProductsOnMount()};
  `;
};

export { homePage };
