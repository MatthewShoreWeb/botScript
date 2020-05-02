let accountNumber = document.querySelector('#input').value = 1;
let windowCount = 0;

document.querySelector('#input').addEventListener('change', function () {
    try {
        accountNumber = parseInt(document.querySelector('#input').value);
        if (accountNumber > 50) {
            accountNumber = 50;
        }
    } catch (e) {
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
    openLoop();
});


