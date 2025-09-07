// Dark MOde Feature code-----------------------
const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("blackScreen");
    sessionStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
});

document.addEventListener('DOMContentLoaded', () => {
    const darkMode = sessionStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('blackScreen');
    }
})

// BACK TO TOP FEATURE CODE

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("shows");
  } else {
    backToTop.classList.remove("shows");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
