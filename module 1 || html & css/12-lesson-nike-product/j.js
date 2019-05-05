var nikeD = document.getElementById('nike-dark');
var nikeW = document.getElementById('nike-white');
var closeDark = document.getElementById('close-dark');
var closeWhite = document.getElementById('close-white');

nikeD.addEventListener('click', function() {
    let dark = document.querySelector('.dark');
    setTimeout(function () {
        dark.classList.add('show');
    }, 500);
});

nikeW.addEventListener('click', function() {
    let white = document.querySelector('.white');
    setTimeout(function () {
        white.classList.add('show');
    }, 500);
});

closeDark.addEventListener('click', function () {
    let dark = document.querySelector('.dark');
    dark.classList.remove('show');
});
closeWhite.addEventListener('click', function () {
    let white = document.querySelector('.white');
    white.classList.remove('show');
});