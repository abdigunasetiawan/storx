const Category = () => {
  return `<!-- Category -->
  <section id="category" class="mt-6">
    <div class="container mx-auto px-4 md:px-8 xl:px-16">
      <h2 class="text-center text-lg font-bold text-slate-800">Category</h2>
  
      <div class="mt-4 flex flex-wrap justify-between gap-y-2.5">
        <a href="/category/jewellery" class="product-category group relative flex aspect-[2/1] w-[48%] items-center justify-center overflow-hidden rounded-lg shadow-sm after:absolute after:inset-0 after:z-10 after:block after:bg-white/50 lg:w-[24%]">
          <span class="absolute z-20 font-semibold text-slate-700">Jewellery</span>
          <img class="h-full w-full object-cover transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110" src="assets/img/category/jewellry.webp" alt=""
        /></a>
        <a href="/category/electronics" class="product-category group relative flex aspect-[2/1] w-[48%] items-center justify-center overflow-hidden rounded-lg shadow-sm after:absolute after:inset-0 after:z-10 after:block after:bg-white/50 lg:w-[24%]">
          <span class="absolute z-20 font-semibold text-slate-700">Electronics</span>
          <img class="h-full w-full object-cover transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110" src="assets/img/category/electronics.webp" alt=""
        /></a>
        <a href="/category/mens-clothing" class="product-category group relative flex aspect-[2/1] w-[48%] items-center justify-center overflow-hidden rounded-lg shadow-sm after:absolute after:inset-0 after:z-10 after:block after:bg-white/50 lg:w-[24%]">
          <span class="absolute z-20 font-semibold text-slate-700">Mens Clothing</span>
          <img class="h-full w-full object-cover transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110" src="assets/img/category/mens-clothing.webp" alt=""
        /></a>
        <a href="/category/womens-clothing" class="product-category group relative flex aspect-[2/1] w-[48%] items-center justify-center overflow-hidden rounded-lg shadow-sm after:absolute after:inset-0 after:z-10 after:block after:bg-white/50 lg:w-[24%]">
          <span class="absolute z-20 font-semibold text-slate-700">Womens Clothing</span>
          <img class="h-full w-full object-cover transition-transform duration-300 hover:transition-transform hover:duration-300 group-hover:scale-110" src="assets/img/category/womens-clothing.webp" alt=""
        /></a>
      </div>
    </div>
  </section>
  <!-- Category -->`;
};

export { Category };
