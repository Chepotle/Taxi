let burger = document.querySelector('.burger_menu');
let menu = document.querySelector('.header_menu');
let title = document.querySelector('.intro_subtitle');

burger.addEventListener('click', function () {
    menu.classList.toggle('burger_animation');
    title.classList.toggle('burger_margin');
})