var btn = document.querySelector('#button');
var blure = document.querySelector('.blure-bg');
var main = document.querySelector('.main');

btn.addEventListener('click', function () {
    blure.classList.toggle('active');
})

window.addEventListener('click', function (x) {
    if (x.target == blure) {
        blure.classList.toggle('active');
    } 
});
