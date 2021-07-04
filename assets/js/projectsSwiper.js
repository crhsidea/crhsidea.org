document.querySelectorAll(".projectinfo").forEach(function (projectinfo) {
    projectinfo.addEventListener("mouseenter", function (event) {
        let projectnumber = projectinfo.getAttribute("projectnumber");
        document.querySelector(".project-count-h1").style.opacity = "0";
        for (let i = 1; i < 13; i++) {
            document.querySelector(`.project-img${i}`).classList.remove(`project-img${i}-transition`);
        }
        document.querySelector(`.project-img${projectnumber}`).classList.add(`project-img${projectnumber}-transition`);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth < 780) {
            projectinfo.style.width = "80vw";
            projectinfo.style.margin = "0";
            document.querySelector(".project-count").style.width = "80vw";
            document.querySelector(`.project-img-div`).style.position = "relative";
            document.querySelector(`.project-img-div`).style.width = "80vw";
            document.querySelector(`.project-img-div`).style.left = "0";
            document.querySelector(`.project-img-div`).style.margin = "-5vh 0 3vh 0";
            document.querySelector(".morebtn").style.margin = "415px 0 0 -4vw";
            document.querySelector(".projectdiv").style.flexDirection = "column";
            for (let i = 1; i < 13; i++) {
                document.querySelector(`.project-img${i}`).style.width = "80vw";
            }
        } else {
            projectinfo.style.width = "40vw";
            projectinfo.style.margin = "0 0 0 40vw";
            document.querySelector(".project-count").style.width = "35vw";
            document.querySelector(`.project-img-div`).style.position = "absolute";
            document.querySelector(`.project-img-div`).style.width = "35vw";
            document.querySelector(`.project-img-div`).style.left = "10vw";
            document.querySelector(`.project-img-div`).style.margin = "0";
            document.querySelector(".morebtn").style.margin = "415px 0 0 16vw";
            document.querySelector(".projectdiv").style.flexDirection = "row";
            for (let i = 1; i < 13; i++) {
                document.querySelector(`.project-img${i}`).style.width = "35vw";
            }
        }
    });
});

function nextPage() {
    let page1 = document.querySelector(".projectinfodiv");
    let page2 = document.querySelector(".projectinfodiv-next");
    if (page1.style.opacity == "0") {
        page1.style.opacity = "1";
        page2.style.opacity = "0";
        page1.style.zIndex = "2";
        page2.style.zIndex = "1";
    } else {
        page1.style.opacity = "0";
        page2.style.opacity = "1";
        page1.style.zIndex = "1";
        page2.style.zIndex = "2";
    }
}
