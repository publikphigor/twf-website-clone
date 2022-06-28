"use strict";

const slider = document.querySelector(".swiper");
const sliderCard = document.querySelectorAll(".swiper-card");

const size = sliderCard[0].clientWidth;
let counter = 1;
slider.style.transform = `translateX(${-size * counter}px)`;

function nextSlide() {
  if (counter >= sliderCard.length - 1) return;
  slider.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  slider.style.transform = `translateX(${-size * counter}px)`;
}

// loop back to first slide
slider.addEventListener("transitionend", () => {
  if (sliderCard[counter].classList.contains("lastClone")) {
    slider.style.transition = "none";
    counter = sliderCard.length - 2;
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
  if (sliderCard[counter].classList.contains("firstClone")) {
    slider.style.transition = "none";
    counter = sliderCard.length - counter;
    slider.style.transform = `translateX(${-slideWidth * counter}px)`;
  }
});

setInterval(nextSlide, 1000);
