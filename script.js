const sideNavHam = document.querySelector(".ham-side-container");
const menuHam = document.querySelector(".hamburger");

menuHam.addEventListener("click", () => {
  menuHam.classList.toggle("open-menu");
  sideNavHam.classList.toggle("hamNavOpen");
});

//-------------LA CASSE-------------------

//On click side nav
// const sideNavHam = document.querySelector(".ham-side-container");
// let sideNavOpen = false;
//Hamburger selector
// const menuHam = document.querySelector(".hamburger");
// let hamOpen = false;
//définition menu top slider
// const slideMenuItems = document.querySelectorAll("ham-side-menu");
// let slideMenuItemsOpen = false;

//Hamburger animation
// menuHam.addEventListener("click", () => {
//   if (!hamOpen && !sideNavOpen && !slideMenuItemsOpen) {
//     menuHam.classList.add("open-menu");
//     hamOpen = true;
//     sideNavHam.classList.add("hamNavOpen");
//     sideNavOpen = true;
//   } else {
//     menuHam.classList.remove("open-menu");
//     hamOpen = false;
//     sideNavHam.classList.remove("hamNavOpen");
//     sideNavOpen = false;
//   }
// });
