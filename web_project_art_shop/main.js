let bread = document.getElementById("current_bread");
    let lst = document.getElementsByClassName("list");
    let lists = document.getElementsByClassName("list__el");
    console.log(lst.length);
    for (let i = 0; i < lst.length; i++) {
        lst[i].addEventListener("click", function() {
            for (let j = 0; j < lists.length; j++) {
                lists[j].classList.remove("active-list");
                lst[j].firstElementChild.classList.remove("active-l");
            }
            lists[i].classList.add("active-list");
            lst[i].firstElementChild.classList.add("active-l");
            console.log(lists[i].innerHTML);
            bread.innerHTML = lst[i].firstElementChild.innerHTML;
        });
    }

const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    slideWrapper = document.querySelectorAll('.slides');

let index = 0;
let flag = true;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
        slide.classList.remove('fade-effect__after');
    }
    slides[n].classList.add('active');

}
const prepareCurrentSlide = ind => {
    activeSlide(ind);
}
const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    prepareCurrentSlide(index);
    clearInterval(interval);
    clearInterval(fade);
    flag = false;
}
const prewSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    prepareCurrentSlide(index);
    clearInterval(interval);
    clearInterval(fade);
    flag = false;
}
const nextSlide_interval = () => {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    prepareCurrentSlide(index);
}
const fade__ef = () => {
    if (flag) {
        let i = index;
        slides[i].classList.add('fade-effect__after');
        }
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prewSlide);

const fade = setInterval(fade__ef, 2000);
const interval = setInterval(nextSlide_interval, 4000);
