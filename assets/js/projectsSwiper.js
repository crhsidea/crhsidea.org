document.addEventListener("DOMContentLoaded", () => {
  new Swiper("#swiper-projects", {
    freeMode: true,
    freeModeMomentum: true,
    freeModeMomentumVelocityRatio: 0.2,
    parallax: true,
    loop: false,
    slidesPerView: 4,
    spaceBetween: 30,
    scrollbar: {
      el: "#projects-swiper-scrollbar",
      draggable: true,
    },
    touchStartPreventDefault: false,
    on: {
      afterInit: () => {
        const scrollThumb = document.querySelector(".swiper-scrollbar-drag");
        scrollThumb.style.backgroundColor = "#fff";
      },
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1536: {
        slidesPerView: 4,
      },
    },
  });

  const projectCards = document.querySelectorAll(".projects-card");

  const swiperContainer = document.getElementById("swiper-projects");

  swiperContainer.onmousedown = () => {
    projectCards.forEach((el) => {
      el.style.transform = "scale(0.9)";
    });
  };

  swiperContainer.onmouseup = () => {
    projectCards.forEach((el) => {
      el.style.transform = "";
    });
  };

  swiperContainer.onmouseleave = () => {
    projectCards.forEach((el) => {
      el.style.transform = "";
    });
  };

  projectCards.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const paragraph = el.querySelector("p");
      paragraph.style.transform = "translateY(0%)";
      paragraph.style.opacity = "1";
    });

    el.addEventListener("mouseleave", () => {
      const paragraph = el.querySelector("p");
      paragraph.style.transform = "translateY(100%)";
      paragraph.style.opacity = "0";
    });
  });
});
