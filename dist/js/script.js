const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});
