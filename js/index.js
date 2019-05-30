// javascript for login page

// global variables
var email = document.getElementById('input-email');
var login_pw = document.getElementById('input-pw');

// verify name, email, and password functions
check_name = (name) => { 
    for (i of registered_accounts) {
        if (name === i._name) return true;
        else return false;
    }
}

check_email = (email) => { 
    for (i of registered_accounts) {
        if (email === i._email) return true;
        else return false;
    }
}

check_pw = (pw) => { 
    for (i of registered_accounts) {
        if (pw === i._pw) return true;
        else return false;
    }
}

function login_submit() {
    if (check_email(email.value) === true) {
        if (check_pw(login_pw.value) === true) alert("Successfully logged in!");
        else alert("Invalid password!");
    }
    else alert("Invalid email address!");
}
