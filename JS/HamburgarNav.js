//---CODE FOR THE HAMBURGAR MENU AND--CODE INCHARGE OR WITHDRWAING THE NAVBAR WHEN A NAVLINK IS CLICKED--------------------------

const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const openNav = document.getElementById("open-sidebar-button");
const menuOpen = true;

function openSidebar() {
  navbar.classList.add("show");
  menuOpen = true;
}

function closeSidebar() {
  navbar.classList.remove("show");
  menuOpen = false;
}

openNav.addEventListener("click", () => {
  navbar.classList.remove("show");

  if (menuOpen) {
    openSidebar();
  } else {
    closeSidebar();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});
