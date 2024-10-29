import { Navbar } from "../components/Navbar.js";
import { detailCategory, detailCategoryOnMount } from "../components/detailCategory.js";
import { Footer } from "../components/Footer.js";

const categoryPage = () => {
  const categoryPageContent = `
    ${Navbar()}
    ${detailCategory()}
    ${Footer()}
`;

  const root = document.getElementById("root");
  root.innerHTML = categoryPageContent;

  detailCategoryOnMount();
};

export { categoryPage };
