const menuBtn = document.querySelector(".open-menu");
const navbar = document.querySelector(".navbar");
const modal = document.getElementById("welcome-modal");
const closeBtn = document.getElementById("close-modal");
const links = document.querySelectorAll(".navbar__link");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("modal-hidden");

  console.log("El usuario ha entrado al portafolio.");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
