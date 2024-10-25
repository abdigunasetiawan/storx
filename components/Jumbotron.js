const Jumbotron = () => {
  return `
  <section id="jumbotron" class="mt-[calc(56px+16px)] xl:mt-[calc(64px+16px)]">
    <div class="container mx-auto px-4 md:px-8 xl:px-16">
      <!-- Slider main container -->
      <div class="swiper swiper-jumbotron h-44 rounded-lg shadow-lg md:h-52 xl:h-56">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide h-full">
            <img class="h-full w-full object-cover" src="assets/img/jumbotron/clothes.webp" alt="" />
          </div>
          <div class="swiper-slide h-full">
            <img class="h-full w-full object-cover" src="assets/img/jumbotron/jewelrys.webp" alt="" />
          </div>
          <div class="swiper-slide h-full">
            <img class="h-full w-full object-cover" src="assets/img/jumbotron/electornics.webp" alt="" />
          </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>`;
};

const jumbotronOnMount = () => {
  const swiper = new Swiper(".swiper-jumbotron", {
    autoplay: true,
    loop: true,
    delay: 1000,
  });
};

export { Jumbotron, jumbotronOnMount };
