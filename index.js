
var mobileSpin = document.getElementById("mobile");
console.log(mobileSpin.style.visibility);
mobileSpin.style.visibility = 'visible';
console.log(mobileSpin)

function toggleMobileMenu(menu) {
    // mobileSpin.style.width=0;
    menu.classList.toggle('open');
    mobileSpin.style.visibility = 'visible';
console.log(mobileSpin.style.visibility);

}

