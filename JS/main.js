// Dark MOde Feature code-----------------------
const darkMode = document.getElementById("dark-mode");

// function setDarkMode(isDarkMode) {
//   if (isDarkMode) {
//     document.body.classList.add("blackScreen");
//     sessionStorage.setItem("darkMode", "enabled");
//   } else {
//     document.body.classList.remove("blackScreen");
//     sessionStorage.setItem("darkMode", "disabled");
//   }
// }

darkMode.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("blackScreen");
  //   setDarkMode(isDarkMode);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const darkMode = sessionStorageStorage.getitem('darkMode');
//     if (darkMode === 'enabled') {
//         document.body.classList.add('blackScreen');
//     }
// })

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
