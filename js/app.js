const btn = document.querySelector(".open-menu");
const navbar = document.querySelector(".navbar");

btn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});


