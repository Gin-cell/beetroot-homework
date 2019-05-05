var about = document.querySelector('.nav-holder ul li:nth-child(1) a');
var jury = document.querySelector('.nav-holder ul li:nth-child(2) a');
var competitors = document.querySelector('.nav-holder ul li:nth-child(3) a');
var contact = document.querySelector('.nav-holder ul li:nth-child(4) a');

window.addEventListener('click', function (x) {
   if (x.target == about) {
        about.style.color = '#e71cb4';
        jury.style.color = '#fff';
        competitors.style.color = '#fff';
        contact.style.color = '#fff';

        about.style.borderBottom = '2px solid #e71cb4'; 
        jury.style.borderBottom = 'none'; 
        competitors.style.borderBottom = 'none'; 
        contact.style.borderBottom = 'none'; 
    } else if (x.target == jury) {
        about.style.color = '#fff';
        jury.style.color = '#e71cb4';
        competitors.style.color = '#fff';
        contact.style.color = '#fff';

        about.style.borderBottom = 'none'; 
        jury.style.borderBottom = '2px solid #e71cb4'; 
        competitors.style.borderBottom = 'none'; 
        contact.style.borderBottom = 'none'; 
    } else if (x.target == competitors) {
        about.style.color = '#fff';
        jury.style.color = '#fff';
        competitors.style.color = '#e71cb4';
        contact.style.color = '#fff';

        about.style.borderBottom = 'none'; 
        jury.style.borderBottom = 'none'; 
        competitors.style.borderBottom = '2px solid #e71cb4'; 
        contact.style.borderBottom = 'none'; 
    } else if (x.target == contact) {
        about.style.color = '#fff';
        jury.style.color = '#fff';
        competitors.style.color = '#fff';
        contact.style.color = '#e71cb4';
        
        about.style.borderBottom = 'none'; 
        jury.style.borderBottom = 'none'; 
        competitors.style.borderBottom = 'none'; 
        contact.style.borderBottom = '2px solid #e71cb4'; 
    }
});

//****************On Scroll Header****************//

window.onscroll = function() {myFunction()};

var design = document.querySelector(".design-battles");
var header = document.querySelector(".header-top-bg");
var sticky = design.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


