document.querySelectorAll(".projectinfo").forEach(function(projectinfo) {
  projectinfo.addEventListener("mouseenter", function(event) {
    let projectnumber = projectinfo.getAttribute('projectnumber');
    document.querySelector(".project-count-h1").style.opacity = "0";
    for(let i=1;i<7;i++) {
      document.querySelector(`.project-img${i}`).classList.remove(`project-img${i}-transition`);
    }
    document.querySelector(`.project-img${projectnumber}`).classList.add(`project-img${projectnumber}-transition`);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 780) {
    document.querySelector(".projectinfo").style.width = "80vw";
    document.querySelector(".projectinfo").style.margin = "0";
  } else {
    document.querySelector(".projectinfo").style.width = "40vw";
    document.querySelector(".projectinfo").style.margin = "0 0 0 40vw";
  }
  window.addEventListener("resize", checkWindowSize);
});