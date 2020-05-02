// Email bot script.

function createAccount() {
    function randomString(x, y) {
        return Math.random().toString(36).substr(x, y);
    }

    let email = randomString(2, 5) + '@' + randomString(2, 5) + '.com';
    let password = randomString(0, 8);

    // Enter random information.
    document.querySelector('#txtEmail').value = email;
    document.querySelector('#txtPassword').value = password;
    document.querySelector('#txtPasswordConfirm').value = password;

    // Accept the terms and conditions.
    document.querySelector('#termsCondtion').checked = true;

    // Create the account.
    //document.querySelector('#btnCreate').form.submit();

    // setTimeout(function () {
    //     window.location.href = 'https://www.strongholdkingdoms.com/full_site.php';
    // }, 500);

}
