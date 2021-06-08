const mobileClick = () => {
  const outer = document.querySelector(".outer");
  const height = outer.getBoundingClientRect().height;
  if (height === 100) {
    outer.style.height = "300px";
  } else {
    outer.style.height = "100px";
  }
};

const checkWindowSize = () => {
  const nav = document.querySelector(".homebuttondiv");
  const mobileNav = document.querySelector(".mobile-nav");
  if (window.innerWidth < 910) {
    nav.className = "homebuttondiv";
    mobileNav.className = "mobile-nav";
    mobileNav.addEventListener("click", mobileClick);
  } else {
    nav.className = "homebuttondiv";
    mobileNav.className = "mobile-nav nav-hidden";
    mobileNav.removeEventListener("click", mobileClick);
    document.querySelector(".outer").style.height = "100px";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
});
