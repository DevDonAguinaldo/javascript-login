// file for registered account data

// default accounts 
let johnDoe = new Account("John Doe", "johndoe@gmail.com", "Password123");
let janeDoe = new Account("Jane Doe", "janedoe@yahoo.com", "Password321");

// list of accounts
// temporary database
registered_accounts = [
    johnDoe,
    janeDoe,
];

// function to show registered accounts
var show_registered_accounts = () => { registered_accounts.forEach(account => console.log(account._name)); };


