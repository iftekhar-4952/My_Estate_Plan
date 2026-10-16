
const SITE_CONFIG = {
  supportEmail: "iftekhar100622@gmail.com"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach((e) => {
    e.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-support]").forEach((e) => {
    e.href = `mailto:${SITE_CONFIG.supportEmail}`;
  });

  const b = document.querySelector(".menu");
  const n = document.querySelector(".nav nav");

  if (b && n) {
    b.addEventListener("click", () => n.classList.toggle("open"));
  }
});
