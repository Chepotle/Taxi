let burger = document.querySelector('.burger');
let menu = document.querySelector('.burger_menu');
let burgerWraper = document.querySelector('.burger_wraper');

burger.addEventListener('click', function () {
    menu.classList.toggle('burger_menu_open');
    burgerWraper.classList.toggle('burger_wraper_position');
})