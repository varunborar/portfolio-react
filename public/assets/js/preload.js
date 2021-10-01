function removePreLoader() {
    let preloader = document.querySelector(".preload-wrapper");
    preloader.style.display = 'none';
}

window.addEventListener('load', removePreLoader);