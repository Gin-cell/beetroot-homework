//**********LOG-IN
var userName;
var password;

function logIn () {
    userName = prompt('Enter your user name');
    if(userName == 'admin' || userName == 'Admin') {
        password = prompt(`Enter your password for ${userName}`);
        if (password == 'Чёрный Властелин') {
            alert('Welcome!');
        } else {
            alert('The password is wrong!');
        };
    } else if (userName == null) {
        alert('Log in has been cancelled');
        console.log(userName);
    } else {
        alert('I dont know you');
    }
}

//**********toUpperCase
var userStr = '';
const capitalize = (x) => {
    userStr = prompt('Enter a word without capital letters in it');
    let capitalized = userStr.charAt(0).toUpperCase() + userStr.slice(1);
    alert(capitalized);
}

//**********outputSmallerNumber

var userNum1;
var userNum2;

const min = (a, b) => {
    a = prompt('Enter the first number');
    b = prompt('Enter the second number');
    if (a < b) {
        alert(`${a} is smaller than ${b}`);
    } else if (a == b) {
        alert(`${a} and ${b} are equal`);
    } else if (a > b) {
        alert(`${b} is smaller than ${a}`);
    }
}