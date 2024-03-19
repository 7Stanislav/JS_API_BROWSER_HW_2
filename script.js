document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slider img');
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
    }

    function prevSlide() {
        currentSlide = (currentSlide === 0) ? (slider.children.length - 1) : (currentSlide - 1);
        updateSlider();
    }

    function nextSlide() {
        currentSlide = (currentSlide === slider.children.length - 1) ? 0 : (currentSlide + 1);
        updateSlider();
    }

    function updateSlider() {
        showSlide(currentSlide);

        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[currentSlide].classList.add('active');
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    updateSlider();
});
