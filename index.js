if ("serviceWorker" in navigator) {
    console.log("service worker registered")
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}