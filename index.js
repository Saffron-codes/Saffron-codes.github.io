
var mobileSpin = document.querySelector(".welcome img")
console.log(mobileSpin.style.visibility);
mobileSpin.style.visibility = 'visible';
console.log(mobileSpin)

function toggleMobileMenu(menu) {
    // mobileSpin.style.width=0;
    menu.classList.toggle('open');
    // mobileSpin.style.visibility = 'visible';
    // console.log(mobileSpin.style.visibility);


    if (mobileSpin.style.visibility == 'hidden'){
        mobileSpin.style.visibility = 'visible';
        console.log("Visible");
    }
        
    else{
        mobileSpin.style.visibility = 'hidden';
        console.log("Hidden");
    }

}

