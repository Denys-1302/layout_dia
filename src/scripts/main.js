'use strict';
const slides = document.querySelectorAll('.slide');
let current = 0;

document.querySelector('.next').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current - 1 + slides.length) % slides.length;
  slides[current].classList.add('active');
});


const menuIcon = document.querySelector('.icon--menu');
const menuNav = document.querySelector('.menu__nav');

menuIcon.addEventListener('click', () => {
  menuNav.classList.toggle('active'); // додаємо/забираємо клас active
});
