const menu = document.querySelector("nav .menu");
const closeBtn = document.querySelector("nav .close");
const navLinks = document.querySelector("nav .link");

// open/close handlers
const openNav = () => {
 navLinks.classList.add("open"); // <-- ONLY TOGGLE THE CLASS
  menu.style.display = "none";
  closeBtn.style.display = "flex";
};

export const closeNav = () => {
 navLinks.classList.remove("open"); // <-- ONLY TOGGLE THE CLASS
  menu.style.display = "flex";
  closeBtn.style.display = "none";
};

menu.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    // adjust breakpoint to match your CSS
    navLinks.style.display = ""; // remove inline style so CSS takes over
    menu.style.display = "none";
    closeBtn.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

// module.export = {closeNav};
