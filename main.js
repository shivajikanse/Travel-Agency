// alert("working ")
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1600,
  };

  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOptions,
  });
  
  ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOptions,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOptions,
    delay:1000,
  });
});




// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true, // Set to true if you want the slider to loop
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
