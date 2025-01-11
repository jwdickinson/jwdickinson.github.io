// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Update current year in footer
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();
