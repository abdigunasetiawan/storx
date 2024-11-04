import { homePage } from "./pages/homePage.js";
import { detailProductPage } from "./pages/detailProductPage.js";
import { categoryPage } from "./pages/categoryPage.js";
import { searchPage } from "./pages/searchPage.js";

const route = (link, event) => {
  event.preventDefault();

  console.log("route trigered");
  event = event || window.event;
  if (window.location.pathname !== link) {
    console.log("history pushed");

    window.history.pushState({}, "", link);
    console.log("link tidak sama");
    handleLocation();
  } else {
    console.log("link sama");
  }

  console.log(window.history);
};

const handleLocation = async () => {
  // alert("handle location trigered");

  const path = window.location.pathname.split("/")[1] || "/";
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
    case "search":
      await searchPage();
      break;
    default:
      // halaman 404
      root.innerHTML = await (await fetch(routes[404])).text();
  }
};

// Pastikan onpopstate hanya memanggil handleLocation satu kali
window.onpopstate = handleLocation;
export { route, handleLocation };
