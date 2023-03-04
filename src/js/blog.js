const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 32,

  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30
  //     },
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40
  //     }
  //   },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
