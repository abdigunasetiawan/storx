import { getBestProducts } from "../services/product.service.js";

const BestProducts = () => {
  return `<!-- Best Products -->
    <section id="best-products" class="mt-6">
      <div class="container mx-auto px-4 md:px-8 xl:px-16">
        <h2 class="text-lg font-bold text-slate-800">Discover Our Best Poducts!</h2>
        <div class="relative">
          <button class="btn-navigation-left absolute left-0 top-1/2 z-20 -translate-x-[calc(50%-8px)] -translate-y-1/2 rounded-full bg-black/50 p-2">
            <svg class="stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
          </button>
          <div class="best-products-container pointer-events-none relative flex gap-4 gap-y-8 overflow-x-auto scroll-smooth p-2"></div>

          <button class="btn-navigation-right absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-[calc(50%-8px)] rounded-full bg-black/50 p-2">
            <svg class="stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <!-- _Best Products -->`;
};

const bestProductsOnMount = async () => {
  const products = await getBestProducts();
  const bestProductsContainer = document.querySelector(".best-products-container");
  products.map((product) => {
    bestProductsContainer.innerHTML += `<a href="/product/${product.id}" data-id="${product.id}" class="cursor-pointer pointer-events-auto w-[48%] shrink-0 lg:w-[24%] overflow-hidden rounded-xl  product-card">
            <div class="group relative h-52 overflow-hidden from-black/10 from-5% to-white/0 p-4 after:absolute after:inset-0 after:z-10 after:w-full after:bg-gradient-to-t">
              <button class="absolute right-4 top-4 z-20">
                <svg class="stroke-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
              </button>

              <img class="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105" src="${product.image}" alt="" />
            </div>
            <div class="bg-white px-4 py-2.5 h-[100px] flex flex-col justify-between">
              <h1 class="line-clamp-2 text-pretty font-medium text-slate-800">${product.title}</h1>
              <div class="mt-1 flex justify-between">
                <p class="text-lg font-bold text-slate-700">$${product.price}</p>
                <div class="flex items-center gap-1">
                  <svg class="fill-yellow-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-star">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                  </svg>
                  <span class="font-medium text-slate-700">${product.rating.rate}</span>
                </div>
              </div>
            </div>
          </a>`;
  });

  bestProductsScrollerHandler();
};

// Best Products Scroller
const bestProductsScrollerHandler = () => {
  const bestProductsContainer = document.querySelector(".best-products-container");
  const bestProductsLeftButton = document.querySelector("section#best-products button.btn-navigation-left");
  const bestProductsRightButton = document.querySelector("section#best-products button.btn-navigation-right");

  const updateBestProductsButtons = () => {
    const maxScrollLeft = bestProductsContainer.scrollWidth - bestProductsContainer.clientWidth;

    if (bestProductsContainer.scrollLeft === 0) {
      bestProductsLeftButton.style.visibility = "hidden";
    } else {
      bestProductsLeftButton.style.visibility = "visible";
    }

    if (bestProductsContainer.scrollLeft >= maxScrollLeft) {
      bestProductsRightButton.style.visibility = "hidden";
    } else {
      bestProductsRightButton.style.visibility = "visible";
    }
  };

  updateBestProductsButtons();

  bestProductsContainer.addEventListener("scroll", updateBestProductsButtons);

  bestProductsLeftButton.addEventListener("click", () => {
    bestProductsContainer.scrollLeft -= bestProductsContainer.clientWidth;
  });

  bestProductsRightButton.addEventListener("click", () => {
    bestProductsContainer.scrollLeft += bestProductsContainer.clientWidth;
  });
};

export { BestProducts, bestProductsOnMount };
