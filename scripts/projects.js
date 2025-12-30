window.sr = ScrollReveal();
function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const slideWidth = slider.querySelector('.pro_slide').offsetWidth + 15;
    
    slider.scrollLeft += (slideWidth * direction);
}

sr.reveal('.pro_picture', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
});

sr.reveal('.pro_description', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px',
    delay: 1000,
});
