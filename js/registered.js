// file for registered account data

let defaultAccount = new Account("John Doe", "johndoe01@gmail.com", "password123");

registered_accounts = [
    defaultAccount,
];

var show_registered_accounts = () => { registered_accounts.forEach(function(account) {console.log(account._name)}); };
