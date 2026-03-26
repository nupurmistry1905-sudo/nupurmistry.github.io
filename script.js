document.addEventListener('DOMContentLoaded', () => {
    // ----- Slider Begin
    const CaroS = document.querySelector('.Carousel-slider');
    // Initializes the MicroSlider library
    const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
    const hammer = new Hammer(CaroS);
    const CaroSTimer = 2000;
    
    let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

    // ----- Gesture Swipe Event
    hammer.on('swipe', function(e) {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + ' gesture detected');
    });

    let slideLink = document.querySelectorAll('.slider-item');
    if (slideLink && slideLink !== null && slideLink.length > 0) {
        slideLink.forEach(el => el.addEventListener('click', e => {
            e.preventDefault();
            let href = el.dataset.href;
            let target = el.dataset.target;
            if (href !== '#') window.open(href, target);
        }));
    }
    // ---- Slider End
});