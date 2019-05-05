var input = document.querySelector('.searchHold input');
var btn = document.querySelector('.searchHold button');
var alertBoxBtn = document.querySelector('.closeBtn');
var alertBox = document.querySelector('.alertBox');

btn.addEventListener('click', function () {
    alertBox.classList.add('active');
});

alertBoxBtn.addEventListener('click', function () {
   alertBox.classList.remove('active'); 
   input.value = '';
});