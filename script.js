//On click side nav
const sideNavHam = document.querySelector(".ham-side-container");
let sideNavOpen = false;
//Top side nav animation
// sideNavHam.addEventListener("click", () => {
//   if (!sideNavOpen) {
//     sideNavHam.classList.add("hamNavOpen");
//     sideNavOpen = true;
//   } else {
//     sideNavHam.classList.add("hamNavOpen");
//     sideNavOpen = false;
//   }
// });
//Hamburger selector
const menuHam = document.querySelector(".hamburger");
let hamOpen = false;
//Hamburger animation
menuHam.addEventListener("click", () => {
  if (!hamOpen && !sideNavOpen) {
    menuHam.classList.add("open-menu");
    hamOpen = true;
    sideNavHam.classList.add("hamNavOpen");
    // sideNavHam.style.transform("translateY(0)");
    sideNavOpen = true;
  } else {
    menuHam.classList.remove("open-menu");
    hamOpen = false;
    sideNavHam.classList.remove("hamNavOpen");
    sideNavOpen = false;
  }
});
