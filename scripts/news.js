document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.s_slides-container');
    const slides = document.querySelectorAll('.s_slide');
    const prevBtn = document.querySelector('.s_prev-btn');
    const nextBtn = document.querySelector('.s_next-btn');
    const dotsContainer = document.querySelector('.s_dots-container');

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    const slideIntervalTime = 20000; 

    function createDots() {
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('s_dot');
            if (index === currentIndex) {
                dot.classList.add('s_active');
            }
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        document.querySelectorAll('.s_dot').forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('s_active');
            } else {
                dot.classList.remove('s_active');
            }
        });
    }

    function showSlide(index) {
        // Desactiva el slide actual (si hay uno)
        if (slides[currentIndex]) {
            slides[currentIndex].classList.remove('s_active-slide');
        }

        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        // Activa el nuevo slide
        slides[currentIndex].classList.add('s_active-slide');
        updateDots();
    }

    // Función para ir a un slide específico
    function goToSlide(index) {
        showSlide(index);
    }

    // Funciones de navegación
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Event listeners para los botones de navegación
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    // Funcionalidad de auto-slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, slideIntervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    // Inicialización del slider
    createDots();
    showSlide(currentIndex); // Muestra el primer slide al cargar
    startAutoSlide();
});