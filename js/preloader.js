const preloader = document.querySelector('#preloader')

window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('fondu-out')
    setTimeout(() => {
        preloader.remove();
        },500);
    },1500);
});