const onScroll = () => {
  const backFilter = document.querySelector(".nav-backfilter");
  const navContainer = document.querySelector(".nav-container");
  backFilter.style.height = `${window.scrollY}px`;

  const { height: navHeight } = navContainer.getBoundingClientRect();

  if (navHeight > 70 && window.scrollY > 0) {
    navContainer.style.height = `${navHeight - 20}px`;
    document.querySelector(".logo").style.height = 0;
  } else if (window.scrollY === 0) {
    document.querySelector(".logo").style.height = "50px";
    navContainer.style.height = "100px";
  }
};

const checkWindowSize = () => {
  if (window.innerWidth < 780) {
    document.querySelector(".nav-container").className =
      "nav-container nav-hidden";
    document.querySelector(".mobile-top-logo").className = "mobile-top-logo";
    document.querySelector(".mobile-bottom-nav").className =
      "mobile-bottom-nav";
    document.querySelector(".nav-placeholder").style.height = "60px";
  } else {
    document.querySelector(".nav-container").className = "nav-container";
    document.querySelector(".mobile-top-logo").className =
      "mobile-top-logo nav-hidden";
    document.querySelector(".mobile-bottom-nav").className =
      "mobile-bottom-nav nav-hidden";
    document.querySelector(".nav-placeholder").style.height = "100px";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  checkWindowSize();
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", checkWindowSize);
});
