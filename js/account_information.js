// file for account information class

class Account {
    constructor(name, email, pw) {
        this._name = name;
        this._email = email;
        this._pw = pw;
    }
    get name() { return _name; }
    get email() { return _email; }
    get pw() { return _pw; }
    set name(newName) { this._name = newName; }
    set email(newEmail) { this._email = newEmail; }
    set pw(newPw) { this._pw = newPw; }
}
