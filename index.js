let accountNumber = document.querySelector('#input').value = 1;
let windowCount = 0;
let emails = [];

function generateEmail() {
    function randomString(x, y) {
        return Math.random().toString(36).substr(x, y);
    }
    let email = randomString(2, 5) + '@' + randomString(2, 5) + '.com';
    return email;
};

document.querySelector('#input').addEventListener('change', function () {
    try {
        accountNumber = parseInt(document.querySelector('#input').value);
        if (accountNumber > 50) {
            accountNumber = 50;
        }
    } catch (e) {
    }
});

document.querySelector('#generateEmails').addEventListener('click', function () {
    let emailList = document.querySelector('#emails');
    while (emailList.firstChild) {
        emailList.removeChild(emailList.lastChild);
      }

    for (let index = 0; index < accountNumber; index++) {
        let email = generateEmail(), listText = document.createTextNode(email), listItem = document.createElement('li');
        listItem.appendChild(listText);
        emailList.appendChild(listItem);
        emails.push(email);
    }
});


// Recursively opens new tabs with a delay.
function openLoop () {
    setTimeout(function () {     
        window.open('https://www.strongholdkingdoms.com/full_site.php');
      
        windowCount++;
        if (windowCount < accountNumber) {
            openLoop();
        }
    }, 1500);
};

document.querySelector('#go').addEventListener('click', function () {
    emails.forEach(function (thisEmail) {
        window.open('https://shk.jacjones.dev/acc-creater/email-creater.php?email=' + thisEmail)
    });
    //openLoop();
});


