var email = document.getElementById('emailaddress');
var pw = document.getElementById('input-pw');

username_list = [];
email_list = [];
pw_list = [];

function check_email_list(user_email) {
    for (let i = 0; i < email_list.length; i++) {
        if (user_email === email_list[i]) return true;
        else return false;
    }
}

function get_index(user_email) {
    for (let i = 0; i < email_list.length; i++) {
        if (user_email === email_list[i]) return i;
        else return -1;
    }
}

function verify_pw(user_pw, index) {
    if (user_pw === pw_list[index]) 
        alert("Successfully Logged In!");
    else 
        alert("Invalid Credentials!");
}

function login_submit() {
    // verify email is in file
    if (check_email_list(email.value) === true) {
        // verify password
        let pw_index = get_index(email.value); // gets password index from email list
        // find corresponding pw in pw list
        if (pw_index === -1) return; // returns empty if -1
        else verify_pw(pw.value, pw_index); // verifies password in list
    } 
    else
        console.log("Invalid Email");
}

function signup_submit() {
    let firstname = document.getElementById('signup-firstname');
    let lastname = document.getElementById('signup-lastname');
    let email = document.getElementById('signup-email');
    let password = document.getElementById('signup-pw')

    if (check_email_list(email.value) === true)
        alert("Email Already Exists!")
    else {
        username_list.push(firstname.value + ' ' + lastname.value);
        email_list.push(email.value);
        pw_list.push(password.value);
    }
}
