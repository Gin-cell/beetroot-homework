//**********SOLUTION
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

