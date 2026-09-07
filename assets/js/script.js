
/* =========================================================
   MOBILE NAVBAR
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    // Open / close mobile menu
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    navLinks.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

}

