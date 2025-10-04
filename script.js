var typed = new Typed(".typed", {
  strings: ["I'm Peter Parker"],
  typeSpeed: 200,
  backSpeed: 25,
  loop: true,
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});