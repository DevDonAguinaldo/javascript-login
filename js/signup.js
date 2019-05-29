// javascript for signup page

// global variables
var signup_pw = document.getElementById("signup-pw");
var confirm_pw = document.getElementById("signup-pw-confirm");
var fname = document.getElementById("signup-firstname");
var lname = document.getElementById("signup-lastname");
var signup_email = document.getElementById("signup-email");

function signup_submit() {    
    if (signup_pw.value === confirm_pw.value) {
        let fullname = `${fname.value} ${lname.value}`;
        let newAcct = new Account(fullname, signup_email.value, signup_pw.value);
        registered_accounts.push(newAcct);
        alert("Successfully signed up!");
        show_registered_accounts();
    }
   else 
        alert("Error - Password does not match!");
}

