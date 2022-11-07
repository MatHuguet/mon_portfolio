const menuHam = document.querySelector(".hamburger");
let hamOpen = false;

menuHam.addEventListener("click", () => {
  if (!hamOpen) {
    menuHam.classList.add("open-menu");
    hamOpen = true;
  } else {
    menuHam.classList.remove("open-menu");
    hamOpen = false;
  }
});
