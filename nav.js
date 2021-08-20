// menu for projects
const showMenu = (menuBtn, nav) => {
    const toggle = document.querySelector(menuBtn);
    nav = document.querySelector(nav);

    if(menuBtn && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('.menu-btn', '.nav-menu');

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sections = document.querySelector('section[id]');

// function scrollActive() {
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id');

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
//         } else {
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive);

function scrollHeader() {
    const nav = document.getElementById('header');
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

let menuBtn = document.querySelector('.menu-btn');
let navMenu = document.querySelector('.navbar .nav-menu');
let hamburgMenuBtn = document.querySelector('.menu-btn i');

// menuBtn.addEventListener('click', () => {
//     hamburgBtnMenuToggle();
// });


function hamburgBtnMenuToggle() {
    navMenu.classList.toggle('active');
    hamburgMenuBtn.classList.toggle('active');
}

let subMenu = document.querySelector('.nav-item.sub-menu');

// subMenu.addEventListener('click', toggleSubMenu);
function toggleSubMenu() {
    this.classList.toggle('active');
}