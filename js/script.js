let menu = document.querySelector('.menu')
let menuItem = document.querySelectorAll('.menu__item')
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu--active');
});


menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('menu--active');
    });
});