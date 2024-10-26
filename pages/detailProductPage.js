import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import { detailProduct, detailProductOnMount } from "../components/detailProduct.js";

export const detailProductPage = async () => {
  return `
  ${Navbar()}
  ${await detailProduct()}
  ${detailProductOnMount()}
  ${Footer()}
  `;
};
