/**
 * Add Event on multiple elements
 */
const addEventListener = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
        console.log('hay')
    }
}

/**
 * Navbar toggler for mobile
 * */

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNav = function () {
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")
}

addEventListener(navTogglers, "click", toggleNav)

/**
 * Header
 * */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    header.classList[this.window.scrollY > 100 ? "add" : "remove"]("active");
})