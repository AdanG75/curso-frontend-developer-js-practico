const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burguerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const cartMenu = document.querySelector(".navbar-shopping-cart")
const productMenu = document.querySelector(".product-detail")

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toogleCartMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
    productMenu.classList.add("inactive")
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
    productMenu.classList.add("inactive")
}

function toogleCartMenu() {
    productMenu.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
}

