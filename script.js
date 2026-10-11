/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navigationItems =
    document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


/* =========================
   COPYRIGHT YEAR
========================= */

const yearElement =
    document.getElementById("year");

yearElement.textContent =
    new Date().getFullYear();


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");

const formStatus =
    document.getElementById("form-status");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    formStatus.textContent =
        "Thank you, " +
        name +
        "! Your message has been received.";

    contactForm.reset();

});