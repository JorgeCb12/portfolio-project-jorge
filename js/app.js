// Mobile menu toggle (open/close navbar and animate button)
const menuBtn = document.querySelector(".open-menu");
const navbar = document.querySelector(".navbar");

// Welcome modal elements
const modal = document.getElementById("welcome-modal");
const closeBtn = document.getElementById("close-modal");

// Navigation links
const links = document.querySelectorAll(".navbar__link");

// Toggle mobile navigation menu
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// Close welcome modal and log entry message
closeBtn.addEventListener("click", () => {
  modal.classList.add("modal-hidden");

  console.log("The user has entered the portfolio.");
});

// Handle active state for navigation links
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Download CV file programmatically
function downloadCV() {
  const link = document.createElement("a");
  link.href = "./public/docs/CvJorge.pdf";
  link.download = "Jorge_Corrales_CV.pdf";
  link.click();
}

// Smooth scroll to contact section
function goToContact() {
  const section = document.getElementById("contact");
  section.scrollIntoView({ behavior: "smooth" });
}

// Toggle hero description text (Frontend ↔ Backend info)
function changeText() {
  const text = document.getElementById("description");

  if (text.innerText.includes("Frontend developer")) {
    text.innerText =
      "También tengo experiencia en animaciones, UX/UI y optimización web.";
  } else {
    text.innerText =
      "Frontend developer especializado en React, Vite y TailwindCSS. Creo interfaces modernas, optimizadas y enfocadas en experiencia de usuario.";
  }
}

// Toggle extra info visibility (show/hide effect)
function toggleInfo() {
  const box = document.getElementById("extraInfo");
  box.classList.toggle("active");
}
