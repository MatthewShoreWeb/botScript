// Email bot script.

function randomString(x, y) {
    return Math.random().toString(36).substr(x, y);
}

// String after @ needs to be a valid email provider i.e. gmail.
let email = randomString(2, 5) + '@' + randomString(2, 5) + '.com';
let password = randomString(0, 8);

// Enter random information.
document.querySelector('#txtEmail').value = email;
document.querySelector('#txtPassword').value = password;
document.querySelector('#txtPasswordConfirm').value = password;

// Accept the terms and conditions.
document.querySelector('#termsCondtion').checked = true;

setTimeout(function () {
    window.location.href = 'http://localhost:8000/?email=' + email + '&password=' + password;
}, 2000);


    // Create the account.
    // setTimeout(function () {
    //     document.querySelector('#btnCreate').form.submit();
    // }, 500);
