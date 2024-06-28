
var header = document.getElementById('header');
const header_links = header.querySelectorAll('.header-link');

window.addEventListener('scroll', () => {
  var scroll = window.scrollY;

  const threshold = 10;

  if (scroll > threshold) {
    header.style.backgroundColor = '#02061b';
    header_links.forEach(link => link.style.color = '#FFFFFF');
  } else {
    header.style.backgroundColor = 'transparent';
    header_links.forEach(link => link.style.color = '#000000');
  }
});