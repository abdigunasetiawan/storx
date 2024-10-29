import { homePage } from "./pages/homePage.js";
import { detailProductPage } from "./pages/detailProductPage.js";

// const route = (el, event) => {
//   event = event || window.event;
//   window.history.pushState({}, "", el.href);
//   event.preventDefault();
//   handleLocation();
// };

const route = (el, event) => {
  event = event || window.event;
  if (window.location.pathname !== el.getAttribute("href")) {
    window.history.pushState({}, "", el.href);
  }
  event.preventDefault();
  handleLocation();
};

const handleLocation = async () => {
  const path = window.location.pathname.split("/")[1] || "/";
  switch (path) {
    case "":
    case "/":
      await homePage();
      break;
    case "product":
      await detailProductPage();
      break;
    default:
      // halaman 404
      root.innerHTML = await (await fetch(routes[404])).text();
  }
};

// Pastikan onpopstate hanya memanggil handleLocation satu kali
window.onpopstate = handleLocation;
export { route, handleLocation };
