window.sr = ScrollReveal();

// PANELS WITH JS
const contenedor = document.getElementById("repositories-container"); //GET THE CONATINER FOR PANELS
// SET THE DIV's
const panel1 = document.getElementById("repo_pan_1");
const panel2 = document.getElementById("repo_pan_2");
const panel3 = document.getElementById("repo_pan_3");
// SET THE ACTION BUTTONS
const boton1 = document.getElementById("button_repo_1");
const boton2 = document.getElementById("button_repo_2");
const boton3 = document.getElementById("button_repo_3");

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

// ANIMATIONS WITH USER SCROLL
sr.reveal('.index_title', {
    duration: 1500,
    origin: 'bottom',
    reset: 'true'
});

sr.reveal('.cards-container', {
    duration: 2000,
    origin: 'bottom',
    distance: '-20px',
});

sr.reveal('.longest-cards-container', {
    duration: 2000,
    origin: 'bottom',
    distance: '-20px',
});

sr.reveal('.color-palette', {
    duration: 2000,
    delay: 200,
    origin: 'bottom',
    distance: '-20px',
});

sr.reveal('.escalia-repositories', {
    duration: 2000,
    delay: 200,
    origin: 'bottom',
    distance: '-20px',
});

sr.reveal('.happy-bite-collection', {
    duration: 2000,
    delay: 200,
    origin: 'bottom',
    distance: '-20px',
});