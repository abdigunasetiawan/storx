import { homePage } from "./pages/homePage.js";
import { detailProductPage } from "./pages/detailProductPage.js";

const route = (el, event) => {
  event = event || window.event;
  window.history.pushState({}, "", el.href);
  event.preventDefault();
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": homePage,
  "index.html": detailProductPage,
  product: detailProductPage,
};

const root = document.getElementById("root");

const handleLocation = async () => {
  const path = window.location.pathname.split("/")[1] || "/";
  const route = routes[path] || routes[404];
  root.innerHTML = await route();
};

window.onpopstate = handleLocation;
window.route = route;

export { route, handleLocation };
