const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dot = document.querySelectorAll('.dot'),
      slideWrapper = document.querySelectorAll('.slider-wrapper');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');   
}

const activeDot = n => {
    for (d of dot) {
        d.classList.remove('active');
    }
    dot[n].classList.add('active');   
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    prepareCurrentSlide(index);
    clearInterval(interval);
}

const nextSlide_interval = () => {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    prepareCurrentSlide(index);
}

const prewSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    prepareCurrentSlide(index);
    clearInterval(interval);
}

dot.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        clearInterval(interval);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prewSlide);

const interval = setInterval(nextSlide_interval, 2500);