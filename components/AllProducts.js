import { getAllProducts } from "../services/product.service.js";

const AllProducts = () => {
  return ` <!-- All Products -->
    <section id="all-products" class="mt-6">
      <div class="container mx-auto px-4 md:px-8 xl:px-16">
        <h2 class="text-lg font-bold text-slate-800">All Poducts</h2>
        <div class="all-products-container flex flex-wrap justify-between gap-y-8 p-2"></div>
      </div>
    </section>
    <!-- _All Products -->`;
};

const allProductsOnMount = async () => {
  const products = await getAllProducts();
  const allProductsContainer = document.querySelector("section#all-products .all-products-container");
  products.map((product) => {
    allProductsContainer.innerHTML += `<a href="/product/${product.id}" data-id="${product.id}" class="product-card w-[48%] lg:w-[24%]  overflow-hidden rounded-xl shadow">
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
};

export { AllProducts, allProductsOnMount };
