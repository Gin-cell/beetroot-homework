//*******************TITLE-EDID**************** */

var titleEdit = document.querySelector('.title-edit');
var articleTitle = document.querySelector('.title-article');
var btn = document.querySelector('.redir8');
//function for setting custom title
btn.addEventListener('click', function () {
   articleTitle.textContent = titleEdit.value;
   titleEdit.value = '';
   titleEdit.placeholder = articleTitle.textContent;
});
//run function on pressing Enter
titleEdit.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   btn.click();
  }
});


//*******************EDID-PANEL**************** */
//main buttons
/*
var boldMain = document.querySelector('.fa-bold');
var italicMain = document.querySelector('.fa-italic');
var underlineMain = document.querySelector('.fa-underline');
var justifyMain = document.querySelector('.fa-align-justify');
var leftMain = document.querySelector('.fa-align-left');
var centerMain = document.querySelector('.fa-align-center');
var rightMain = document.querySelector('.fa-align-right');
//redirectors
var boldRedirect = document.querySelector('#redir1');
var italicRedirect = document.querySelector('.redir2');
var underlineRedirect = document.querySelector('.redir3');
var justifyRedirect = document.querySelector('.redir4');
var leftRedirect = document.querySelector('.redir5');
var centerRedirect = document.querySelector('.redir6');
var rightRedirect = document.querySelector('.redir7');

boldRedirect.addEventListener('mouseover', function () {
    boldMain.classList.toggle('active');
    
})
*/




//shift+r reset styles
//https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
window.onkeypress = function(event) {
    if (event.keyCode == 82) {
       alert('esc');
    }
 }





 function add_tags(x) {
    var z = x.toString()
    document.execCommand(z);
}

function colorWhite() {
    document.execCommand('foreColor', false, "#fff");
}