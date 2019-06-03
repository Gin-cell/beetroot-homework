(function () {
    var listItem = document.querySelector('.bulleted');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);
    xhr.onload = function () {
       if(this.status == 200) {
           var employee = JSON.parse(this.responseText);
           for(var i in employee) {
               var nameOfClass = '';
               if(employee[i].inoffice == true) {
                    nameOfClass = 'in';
               } else {
                    nameOfClass = 'out';
               }
               listItem.innerHTML += `<li class="${nameOfClass}">${employee[i].name}</li>`;
           } 
       }  
    };
    xhr.send();
})();

setTimeout(() => {
    $('.modal_bg').css('display', 'block');
},2000);

$('.modal_bg').click(function () {
    $(this).css('display', 'none');
})