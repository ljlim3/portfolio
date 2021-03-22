let myName = document.querySelector('.name');

let card = document.querySelector('.card');

let cardBack = document.querySelector('.card-back');

const slider = document.querySelector('.slider');

myName.addEventListener('click', flip);
cardBack.addEventListener('click', flip);

function flip() {
    card.classList.toggle('flip');
}



