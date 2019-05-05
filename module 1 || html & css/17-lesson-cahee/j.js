var btn = document.querySelector('.btn_nav');
var btnLine1 = document.querySelector('.line_one');
var btnLine2 = document.querySelector('.line_two');
var navNav = document.querySelector('.nav_nav');

btn.addEventListener('click', () => {
    btnLine1.classList.toggle('active');
    btnLine2.classList.toggle('active');
    navNav.classList.toggle('active');
});