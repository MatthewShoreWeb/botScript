// Email bot script.

function randomString (x, y) {
    return Math.random().toString(36).substr(x, y);
}

let email = function () {
    return email = randomString(2, 5) + '@' + randomString(2, 5) + '.com';
}

let password = function () {
    return randomString(0, 8);
}

// Enter random information.
document.querySelector('#txtEmail').getAttribute('value') = email;
document.querySelector('#passwordfield').getAttribute('value') = password;
document.querySelector('#passwordfield2').getAttribute('value') = password;

// Accept the terms and conditions.
document.querySelector('#termsCondtion').checked = true;

// Create the account.
document.querySelector('#btnCreate').form.submit();

