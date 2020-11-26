// BURGER MENU //
const burger = document.querySelector('.top-header__burger');
const elem = document.querySelector('.top-header__burger-item');
const bg = document.querySelector('.top-header__sidebar');
const menu = document.querySelector('.top-header__sidebar-list');
const body = document.querySelector('body');
const gray = document.querySelector('.top-header__backgray');

function openMenu() {
    burger.classList.toggle('active');
    elem.classList.toggle('active');
    bg.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock')
    gray.classList.toggle('active');
}

function closeMenu() {
    burger.classList.remove('active');
    elem.classList.remove('active');
    bg.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
    gray.classList.remove('active');
}

burger.addEventListener('click', function() {
    openMenu();
});


// SMOOTH SCROLL //
const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const blockId = anchor.getAttribute('href').substr(1);

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}