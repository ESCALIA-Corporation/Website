window.sr = ScrollReveal();

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

// PANELS WITH JS
const contenedor = document.getElementById("container"); //GET THE CONATINER FOR PANELS
// SET THE DIV's
const panel1 = document.getElementById("panel1");
const panel2 = document.getElementById("panel2");
const panel3 = document.getElementById("panel3");
// SET THE ACTION BUTTONS
const boton1 = document.getElementById("b-panel1");
const boton2 = document.getElementById("b-panel2");
const boton3 = document.getElementById("b-panel3");

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

sr.reveal('#lab-scroll-anim', {
    duration: 2000,
    origin: 'bottom',
    reset: 'true'
});

// NEW CODE
document.getElementById("javascript-lab").addEventListener("click", function () {
    alert("Oh no! Me has presionado, ahora muere");
});