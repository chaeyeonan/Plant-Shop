// Sticky Header : 스크롤 시 헤더가 따라다니는 기능
const stickyHeader = () => {
  let scrY = window.scrollY;
  const header = document.querySelector(".header");
  if (scrY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

// Menu Active on Each Sections
const sections = document.querySelectorAll("section");
const headerHeight = document.querySelector("header").offsetHeight;

const activateMenu = () => {
  const scrY = window.scrollY;
  sections.forEach((sec) => {
    const secHeight = sec.offsetHeight; // section 요소의 높이값
    const secTop = sec.offsetTop - headerHeight; // section 요소의 위쪽 offset 값
    const secID = sec.getAttribute("id"); // 각 섹션의 id 값 저장

    if (scrY > secTop && scrY <= secTop + secHeight) {
      document.querySelector(`.nav-${secID}`).classList.add("active");
    } else {
      document.querySelector(`.nav-${secID}`).classList.remove("active");
    }
  });
  if (scrY === 0) {
    document.querySelector(".nav-home").classList.add("active");
  }
};

window.addEventListener("scroll", () => {
  stickyHeader();
  activateMenu();
});

// Header Menu toggle
const menuIcon = document.querySelector(".ri-menu-line");
menuIcon.addEventListener("click", () => {
  let icon = "close";
  menuIcon.className === "ri-menu-line" ? (icon = "close") : (icon = "menu");
  menuIcon.className = `ri-${icon}-line`;
});

// const menu = document.querySelector(".nav-hamburger");
// const toggleIcon = (e) => {
//   const target = e.currentTarget;
//   console.log(target.childNodes);

//   target.classList.toggle("close");

//   if (target.classList.contain("close")) console.log(true);
//   else console.log(false);
// };

menu.addEventListener("click", toggleIcon);

// Naviagtion Menu Design : 해당 섹션에 네비게이션 활성화 및 디자인 변경
const navAll = document.querySelectorAll(".nav-item");
navAll.forEach((nav) => {
  nav.addEventListener("click", () => {
    navAll.forEach((nav) => nav.classList.remove("active"));
    nav.className += " active";
  });
});

// Question Section Accordion
const qnaAll = document.querySelectorAll(".qna-item");
const ansAll = document.querySelectorAll(".qna-answer");

// const openQNA = (idx) => {
//   qnaAll.forEach((qna) => qna.classList.remove("active"));
//   ansAll.forEach((ans) => ((ans.style.height = 0), (ans.style.padding = 0)));

//   if (!qnaAll[idx].classList.contains("active")) {
//     qnaAll[idx].classList.add("active");
//     ansAll[idx].style.height = `100%`;
//     ansAll[idx].style.padding = `1rem`;
//   } else if (qnaAll[idx].classList.contains("active")) {
//     qnaAll[idx].classList.remove("active");
//     ansAll[idx].style.height = 0;
//     ansAll[idx].style.padding = 0;
//   }
// };

const activeToggle = (e) => {
  const $this = e.currentTarget;
  $this.classList.toggle("active");
};

qnaAll.forEach((qna) =>
  qna.addEventListener(
    "click",
    // () => {
    //   openQNA(idx);}
    activeToggle
  )
);

// Reveal Effect
const sr = ScrollReveal({
  reset: false,
  duration: 1000,
  origin: "bottom",
  distance: "50px",
});

sr.reveal(".c-home");
sr.reveal(".c-about");
sr.reveal(".step-infoItem", { interval: 200 });
sr.reveal(".product-box", { interval: 200 });

// sr.reveal(".c-home", { duration: 1000, origin: "bottom", distance: "50px" });
// sr.reveal(".c-about", { duration: 1000, origin: "bottom", distance: "50px" });

// Mobile Navigation Design
