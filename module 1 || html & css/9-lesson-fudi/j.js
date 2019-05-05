var dot1 = document.querySelector('.dots-holder div:nth-child(1)');
var dot2 = document.querySelector('.dots-holder div:nth-child(2)');
var dot3 = document.querySelector('.dots-holder div:nth-child(3)');

var one = document.querySelector('.feedback-one');
var two = document.querySelector('.feedback-two');
var three = document.querySelector('.feedback-three');

var img1 = document.querySelector('.img-one');
var img2 = document.querySelector('.img-two');
var img3 = document.querySelector('.img-three');

window.addEventListener('click', function (x) {
   if (x.target == dot1) {
       one.classList.remove('hide');
       two.classList.remove('active');
       three.classList.remove('active');

       img1.classList.remove('hide');
       img2.classList.remove('active');
       img3.classList.remove('active');

       dot1.style.backgroundColor = '#fff';
       dot2.style.backgroundColor = '#796d79';
       dot3.style.backgroundColor = '#796d79';
   } else if (x.target == dot2) {
       one.classList.add('hide');
       two.classList.add('active');
       three.classList.remove('active');

       img1.classList.add('hide');
       img2.classList.add('active');
       img3.classList.remove('active');

       dot1.style.backgroundColor = '#796d79';
       dot2.style.backgroundColor = '#fff';
       dot3.style.backgroundColor = '#796d79';
   } else if (x.target == dot3) {
       one.classList.add('hide');
       two.classList.remove('active');
       three.classList.add('active');

       img1.classList.add('hide');
       img2.classList.remove('active');
       img3.classList.add('active');

       dot1.style.backgroundColor = '#796d79';
       dot2.style.backgroundColor = '#796d79';
       dot3.style.backgroundColor = '#fff';
   }
});