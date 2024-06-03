let currentIndex = 0;
// THEME VARIABLES
let ButtonMode = document.getElementById('theme-mode');
themeforbody = document.body;
themeforfooter = document.getElementById('footer');
themeforcontainers = document.getElementById('institute-container');

// Automatic slider
function showSlide(index) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Button next slide
function nextSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Button prev slide
function prevSlide() {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}
setInterval(nextSlide, 25000);

// Change theme
ButtonMode.addEventListener('click', () => {
    themeforbody.classList.toggle('body-light');
    themeforfooter.classList.toggle('footer-light');
    themeforcontainers.classList.toggle('institute-container-light');
});

const contenedor = document.getElementById("cont_pan-institute"); //GET THE CONATINER FOR PANELS
// SET THE DIV's
const panel1 = document.getElementById("panel-1");
const panel2 = document.getElementById("panel-2");
const panel3 = document.getElementById("panel-3");
// SET THE ACTION BUTTONS
const boton1 = document.getElementById("b-panel-1");
const boton2 = document.getElementById("b-panel-2");
const boton3 = document.getElementById("b-panel-3");

// SET PANEL1 FOR DEFAULT
panel1.style.display = "block";
panel2.style.display = "none"; //HIDE PANEL2
panel3.style.display = "none";

// IF YOU GO BACK TO PANEL1
boton1.addEventListener("click", () => {
    panel1.style.display = "block";
    panel2.style.display = "none";
    panel3.style.display = "none";
});

// IF YOU CLICK THE BUTTON SHOW PANEL2
boton2.addEventListener("click", () => {
    panel1.style.display = "none";
    panel2.style.display = "block";
    panel3.style.display = "none";
});

// IF YOU CLICK THE BUTTON SHOW PANEL3
boton3.addEventListener("click", () => {
    panel1.style.display = "none";
    panel2.style.display = "none";
    panel3.style.display = "block";
});
