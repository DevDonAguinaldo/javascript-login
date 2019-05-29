// file for registered account data

let johnDoe = new Account("John Doe", "johndoe@gmail.com", "password123");
let janeDoe = new Account("Jane Doe", "janedoe@yahoo.com", "pw321");

registered_accounts = [
    johnDoe,
    janeDoe,
];

var show_registered_accounts = () => { registered_accounts.forEach(account => console.log(account._name)); };


