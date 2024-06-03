var header = document.getElementById('header');
window.addEventListener('scroll', () => {
    var scroll = window.scrollY
    if (scroll > 15) {
        header.style.backgroundColor = '#151515'
    } else {
        header.style.backgroundColor = 'transparent'
    }
});