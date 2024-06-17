///// HEADER
var header = document.getElementById('header');
window.addEventListener('scroll', () => {
    var scroll = window.scrollY
    if (scroll > 10) {
        header.style.backgroundColor = '#FFFFFF'
    } else {
        header.style.backgroundColor = 'transparent'
    }
})
