//-------------ADD NEW TASK-------------
var userInp = document.querySelector('#userInp');
    addBtn = document.querySelector('#addBtn');
    edit = document.querySelector('.edit');


var notFinished = document.querySelector('.not_finished');
    itemBody = document.querySelector('.item_body');
    itemText = document.querySelector('.item_text');
    checkBox = document.querySelector('.check_box');
    item = document.querySelector('.item');

addBtn.addEventListener('click', () => {
    notFinished.innerHTML += `
    <li class="item">
        <label class="item_body">
            <input type="checkbox" class="check_box" onchange="func()">
            <span class="item_text">${userInp.value}</span>
        </label>
        <div class="btns_holder" >
            <div class="edit">Edit</div>
                <div class="remove" onclick="this.parentElement.parentElement.style.display = 'none';">
                <div></div>
                <div></div>
            </div>
        </div>
    </li>`;
    userInp.value = '';
})

const func = () => {
    
    
    let status = checkBox.checked;
    console.log(status);
    if(checkBox.checked == true) {
        checkBox.parentElement.parentElement.classList.add('done');
    } else {
        checkBox.parentElement.parentElement.classList.remove('done');
    }
};