let myName = document.querySelector('.name');

let card = document.querySelector('.card');

let cardBack = document.querySelector('.card-back');

myName.addEventListener('click', flip);
cardBack.addEventListener('click', flip);

const myLogo = document.querySelector('.card-front .logo');
myLogo.addEventListener('click', flip);

function flip() {
    card.classList.toggle('flip');
}

let menuBtn = document.querySelector('.menu-btn');
let navMenu = document.querySelector('.navbar .nav-menu');
let hamburgMenuBtn = document.querySelector('.menu-btn i');

menuBtn.addEventListener('click', hamburgBtnMenuToggle);

function hamburgBtnMenuToggle() {
    navMenu.classList.toggle('active');
    hamburgMenuBtn.classList.toggle('active');
}

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

// Sub-menu
let subMenu = document.querySelector('.nav-item.sub-menu');

subMenu.addEventListener('click', toggleSubMenu);
function toggleSubMenu() {
    this.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if(this.scrollY > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
})



$(document).ready(function() {

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Lydia Lim"],
        typeSpeed: 90,
        backSpeed: 60,
        loop: false,
        showCursor: false
    });

    var typed = new Typed(".typing-2", {
        strings: ["Designer | Developer"],
        startDelay: 1700,
        typeSpeed: 80,
        backSpeed: 60,
        loop: false,
        showCursor: false
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            // 1000: {
            //     items: 3,
            //     nav: false
            // }
        }
    });
});
