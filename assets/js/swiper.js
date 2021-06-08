document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-container", {
    spaceBetween: -10,
    speed: 825,
    parallax: true,
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });
});
