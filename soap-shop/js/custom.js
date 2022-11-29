// Elements Clone For Mobile
const mobileMenus = document.querySelector(".mobile-menus");
const navs = document.querySelector(".nav-lists").cloneNode(true);
const info = document.querySelector(".info").cloneNode(true);

mobileMenus.appendChild(navs);
mobileMenus.appendChild(info);

// Mobile Menu Toggle
const mobileBtn = document.querySelector(".mobile-btn");

const toggleMobileBtn = (e) => {
  const target = e.currentTarget;
  const menuHeight = mobileMenus.scrollHeight;

  target.classList.toggle("active");

  if (target.classList.contains("active")) {
    target.classList.remove("not-active");
    mobileMenus.style.height = `${menuHeight}px`;
  } else {
    target.classList.add("not-active");
    mobileMenus.style.height = 0;
  }
};

mobileBtn.addEventListener("click", toggleMobileBtn);

// Scrollreveal Effect
const sr = ScrollReveal({ reset: false });
sr.reveal(".wrapper", { durationi: 1000 });
