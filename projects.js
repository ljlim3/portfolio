const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const indicatorParents = document.querySelector('.controls ul');

let sectionIndex = 0;
let totalSections = 8;

rightArrow.addEventListener('click', translateRight);
leftArrow.addEventListener('click', translateLeft);

document.querySelectorAll('.controls li').forEach(function(indicator, index) {
    indicator.addEventListener('click', function() {
        sectionIndex = index;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + index * -12.5 + '%)';
    });
})

function translateRight() {
    sectionIndex = (sectionIndex < totalSections-1) ? sectionIndex + 1 : 0;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + sectionIndex * -12.5 + '%)';
}

function translateLeft() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : totalSections-1;
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[sectionIndex].classList.add('selected');
    slider.style.transform = 'translate(' + sectionIndex * -12.5 + '%)';
}
