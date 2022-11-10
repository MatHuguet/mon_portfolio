//On click side nav
const sideNavHam = document.querySelector(".ham-side-container");
let sideNavOpen = false;
//Hamburger selector
const menuHam = document.querySelector(".hamburger");
let hamOpen = false;
//Définition items navS
const listNavItemS = document.querySelector(".nav-phone-tab");

//Hamburger animation
menuHam.addEventListener("click", () => {
  if (!hamOpen && !sideNavOpen) {
    menuHam.classList.add("open-menu");
    hamOpen = true;
    sideNavHam.classList.add("hamNavOpen");
    sideNavOpen = true;
  } else {
    menuHam.classList.remove("open-menu");
    hamOpen = false;
    sideNavHam.classList.remove("hamNavOpen");
    sideNavOpen = false;
  }
});
