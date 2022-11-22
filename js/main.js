// Question Section Accordion
// Reveal Effect
// Mobile Navigation Design

// Sticky Header : 스크롤 시 헤더가 따라다니는 기능
let scrY = 0;
const stickyHeader = () => {
  scrY = window.scrollY;
  const header = document.querySelector(".header");
  if (scrY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

window.addEventListener("scroll", () => {
  stickyHeader();
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

// menu.addEventListener("click", toggleIcon);

// Naviagtion Menu Design : 해당 섹션에 네비게이션 활성화 및 디자인 변경
const navAll = document.querySelectorAll(".nav-item");
navAll.forEach((nav) => {
  nav.addEventListener("click", () => {
    navAll.forEach((nav) => nav.classList.remove("active"));
    nav.className += " active";
  });
});
