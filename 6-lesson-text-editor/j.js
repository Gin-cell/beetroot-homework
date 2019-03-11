//*******************TITLE-EDID**************** */

var titleEdit = document.querySelector('.title-edit');
var articleTitle = document.querySelector('.title-article');
var btn = document.querySelector('.fa-font');
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


left.addEventListener('click', function () {
   right.click(); 
});

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
