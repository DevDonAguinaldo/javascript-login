// javascript for login page

// global variables
var email = document.getElementById('input-email');
var pw = document.getElementById('input-pw');

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
    // check the email
    if (check_email(email.value) === true) {
        // check the password
        if (check_pw(pw.value) === true)
            alert("You have logged in successfully!");
        else
            alert("Error - Invalid password.");
    }
    else
        console.log("email not in database");
}

function signup_submit() {

}
