import { homePage } from "./pages/homePage.js";
import { detailProductPage } from "./pages/detailProductPage.js";
import { categoryPage } from "./pages/categoryPage.js";

// const route = (el, event) => {
//   event = event || window.event;
//   window.history.pushState({}, "", el.href);
//   event.preventDefault();
//   handleLocation();
// };

const route = (el, event) => {
  // alert("route trigered");
  event = event || window.event;
  if (window.location.pathname !== el.getAttribute("href")) {
    window.history.pushState({}, "", el.href);
  }
  event.preventDefault();
  handleLocation();
};

const handleLocation = async () => {
  // alert("handle location trigered");

  const path = window.location.pathname.split("/")[1] || "/";
  console.log(path);

  switch (path) {
    case "":
    case "/":
    case "index.html":
      await homePage();
      break;
    case "product":
      await detailProductPage();
      break;
    case "category":
      await categoryPage();
      break;
    default:
      // halaman 404
      root.innerHTML = await (await fetch(routes[404])).text();
  }
};

// Pastikan onpopstate hanya memanggil handleLocation satu kali
window.onpopstate = handleLocation;
export { route, handleLocation };
