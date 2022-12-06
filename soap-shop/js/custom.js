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

// header change Effect
const header = document.querySelector("#header");
const stickyHeader = () => {
  const scrY = window.scrollY;

  if (scrY > 0) header.classList.add("active");
  else header.classList.remove("active");
};

window.addEventListener("scroll", stickyHeader);

// Scrollreveal Effect
const sr = ScrollReveal({ reset: false });
sr.reveal(".wrapper", { duration: 1000 });
sr.reveal(".landing-text-box", {
  duration: 1000,
  origin: "right",
  distance: "80px",
});
sr.reveal(".meet-textBox, .swiper,.feature, .review-frame, .products", {
  duration: 1000,
  origin: "bottom",
  distance: "40px",
});
sr.reveal(".meet-imgBox img, .feature, .review-frame, .products", {
  duration: 1000,
  origin: "bottom",
  distance: "40px",
  interval: "200",
});

//Swiper slider
const swiper = new Swiper(".swiper", {
  loop: true, //슬라이더 무한 반복
  navigation: {
    //네비게이션
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    //슬라이더 인디케이터
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

//Get Products Json data
const productsBox = document.querySelector(".products");

const getData = async () => {
  await fetch("/soap-shop/data/products.json")
    .then((res) => res.json())
    .then((data) => {
      let dataEl;
      data.map((item) => {
        dataEl = ` 
        <div class="product-frame">
          <div class="product-item">
            <div class="product-img">
              <img
                src="/soap-shop${item.prodPath}"
                alt="offer${item.prodId}"
              />
            </div>
            <div class="product-txt">
              <h6>${item.prodTit}</h6>
              <p class="product-price">${item.prodPri}</p>
              <p class="product-desc">
                ${item.prodDes}
              </p>
              <a href="#" class="common-btn">Go To Payment</a>
            </div>
          </div>
        </div>`;
        productsBox.innerHTML += dataEl;
      });
    })
    .catch((err) => console.log(err));
};

getData();

// Fit Insta Img Size
let setHeight = document.querySelector("#img2").offsetHeight;
document.querySelector("#img1").style.height = `${setHeight}px`;

window.addEventListener("resize", () => {
  let setHeight = document.querySelector("#img2").offsetHeight;
  document.querySelector("#img1").style.height = `${setHeight}px`;
});
