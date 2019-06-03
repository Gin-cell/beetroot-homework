document.querySelector('.btn').addEventListener('click', function () {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', 'phones.json', true);
   xhr.onload = function () {
      if(this.status == 200) {
         var phone = JSON.parse(this.responseText);
         var output = '';      
         output += '<ul>';
         for(var i in phone) {
            output += `<li>+${phone[i]}</li>`   
         }
         output += '</ul>'
         document.getElementById('output').innerHTML = output;
      }
   }
   xhr.send();
});