

/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.add("show-menu");
  });
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== SHOW CART ===============*/
let cart = document.getElementById("cart");
let cartShop = document.getElementById("cart-shop");
let cartClose = document.getElementById("cart-close");
/*===== CART SHOW =====*/
/* Validate if constant exists */
if (cartShop) {
  cartShop.addEventListener("click", function () {
    cart.classList.add("show-cart");
  });
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if (cartClose) {
  cartClose.addEventListener("click", function () {
    cart.classList.remove("show-cart");
  });
}

/*=============== SHOW LOGIN ===============*/
let login = document.getElementById("login");
let loginButton = document.getElementById("login-button");
let loginClose = document.getElementById("login-close");
/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if (loginButton) {
  loginButton.addEventListener("click", function () {
    login.classList.add("show-login");
  });
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if (loginClose) {
  loginClose.addEventListener("click", function () {
    login.classList.remove("show-login");
  });
}
/*=============== HOME SWIPER ===============*/

let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
/*=============== NEW SWIPER ===============*/
let arivalsSwiper = new Swiper(".arivals-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
});
/*=============== SHOW SCROLL UP ===============*/
window.onscroll = function () {
  scollToTop();
};
function scollToTop() {
  let scrollUp = document.getElementById("scroll-up");
  //When the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
/*=============== LIGHT BOX ===============*/

/*=============== QUESTIONS ACCORDION ===============*/
let accordionItem = document.querySelectorAll(".questions__item");
accordionItem.forEach((item) => {
  let accordionHeader = item.querySelector(".questions__header");
  accordionHeader.addEventListener("click", () => {
    let openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});
const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler')
styleSwitcherToggle.addEventListener('click', function () {
  document.querySelector('.style__switcher').classList.toggle('open');
})

//Hide style switcher on scroll 
window.addEventListener('scroll', function () {
  if (document.querySelector('.style__switcher').classList.contains('opent')) {
    document.querySelector('.style__switcher').classList.remove('opent')
  }
})

//Theme Colors 
function themeColors() {
  const colorStyle = document.querySelector('.js-color-style'),
    themColorsContainer = document.querySelector('.js-theme-colors');
  themColorsContainer.addEventListener('click', (target) => {
    if (target.classList.contains("js-theme-color-item")) {
      console.log(targe.getAtribute(""));
    }
  });
}