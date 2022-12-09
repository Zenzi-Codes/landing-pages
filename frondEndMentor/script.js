const icons = document.getElementById('menu')
const header = document.getElementById('mobile-nav')
const mobileMenu = document.getElementById('mobile-menu')
const body = document.getElementById('body')

icons.addEventListener('click', (event) => {
    icons.classList.toggle("open");
    header.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    body.classList.toggle("open");

});