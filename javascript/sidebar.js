const hamburger = document.querySelector(".hamburger");
const navbar_links = document.querySelector(".navbar-links");
const nav_cross_icon = document.querySelector(".nav-cross-icon");

hamburger.addEventListener("click", () => {
  navbar_links.classList.toggle("open");
});
nav_cross_icon.addEventListener("click", () => {
  navbar_links.classList.remove("open");
});
