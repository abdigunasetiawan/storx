import { getProduct } from "../services/product.service.js";

const detailProduct = async () => {
  return `
       <div class="min-h-[calc(100vh-(64px+16px+58px))] container mx-auto px-4 md:px-8 xl:px-16 mt-[calc(56px+16px)] xl:mt-[calc(64px+16px)] flex flex-col gap-y-4 lg:flex-row lg:justify-center lg:gap-x-8 lg:items-center">
          <div class="h-72 w-full lg:w-96">
            <img class="product-image mx-auto h-full w-full lg:mx-0 object-contain" src="" alt="" />
          </div>
          <div class="h-px w-full bg-slate-200 lg:hidden"></div>
          <div class="lg:max-w-xl">
            <h1 class="product-title text-2xl font-bold text-slate-800"></h1>
            <p class="mt-1 text-lg font-bold text-slate-700">$ <span class="product-price"></span></p>
            <p class="mt-2 font-medium text-slate-700 product-description"></p>
            <div class="mt-4 flex gap-x-2">
              <button class="flex items-center gap-x-4 group rounded-md border-2 border-slate-900 p-4 transition-colors duration-100 hover:bg-slate-900 flex-shrink-0">
                <svg class="transition-colors duration-100 group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M12.5 17h-6.5v-14h-2" />
                  <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
                  <path d="M16 19h6" />
                  <path d="M19 16v6" />
                </svg>
                <span class="hidden lg:inline group-hover:text-white font-medium transition-colors duration-100">Add to cart</span>
              </button>
              <button class="w-full rounded-md bg-slate-900 px-3 py-2.5 text-lg lg:text-base font-medium text-white transition-colors duration-100 hover:bg-slate-900 active:outline active:outline-offset-2 active:outline-black">Buy Now</button>
            </div>
          </div>
      </div>
    `;
};
const detailProductOnMount = () => {
  const id = window.location.pathname.split("/")[2];

  getProduct(id)
    .then((product) => {
      const product_title = document.querySelector(".product-title");
      const product_price = document.querySelector(".product-price");
      const product_description = document.querySelector(".product-description");
      const product_image = document.querySelector(".product-image");

      product_title.innerHTML = product.title;
      product_price.innerHTML = product.price;
      product_description.innerHTML = product.description;
      product_image.src = product.image;
    })
    .catch((error) => {
      console.error("Error fetching product details:", error);
    });
  return "";
};

export { detailProduct, detailProductOnMount };
