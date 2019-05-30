// javascript for signup page

// global variables
var signup_pw = document.getElementById("signup-pw");
var confirm_pw = document.getElementById("signup-pw-confirm");
var fname = document.getElementById("signup-firstname");
var lname = document.getElementById("signup-lastname");
var signup_email = document.getElementById("signup-email");
var submit_key = document.getElementById("signup-submit-btn");

// submits the signup form
function signup_submit() {    
    if (signup_pw.value === confirm_pw.value 
    && signup_pw.value != ""
    && fname.value != ""
    && lname.value != ""
    && signup_email.value != "") {
        let fullname = `${fname.value} ${lname.value}`;
        let newAcct = new Account(fullname, signup_email.value, signup_pw.value);
        registered_accounts.push(newAcct);
        alert("Successfully signed up!");
    }
    else 
        alert("Error - Field was entered incorrectly!");
}

// reads enter key pressed
confirm_pw.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit_key.click();
    }
});
