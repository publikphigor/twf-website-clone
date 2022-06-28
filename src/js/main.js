"use strict";

const slider = document.querySelector(".swiper");
const sliderCard = document.querySelectorAll(".swiper-card");

const size = sliderCard[0].clientWidth;
let counter = 1;
slider.style.transform = `translateX(${-size * counter}px)`;

function nextSlide() {
  console.log(counter);
  if (counter >= sliderCard.length - 1) return;
  slider.style.transition = `transform 0.4s ease-in-out`;
  counter++;
  slider.style.transform = `translateX(${-size * counter}px)`;
}

setInterval(nextSlide, 7000);
