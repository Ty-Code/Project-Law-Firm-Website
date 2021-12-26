/* 
========================================
Menu and Search Bar
========================================
*/

const searchBtn = document.querySelector('.btn--search');
const searchForm = document.querySelector('.search-form');

searchBtn.onclick = () => {
  searchForm.classList.toggle('active');
  nav.classList.remove('active');
};

const menuBtn = document.querySelector('.btn--menu');
const nav = document.querySelector('nav');

menuBtn.onclick = () => {
  nav.classList.toggle('active');
  searchForm.classList.remove('active');
};

window.onscroll = () => {
  searchForm.classList.remove('active');
  nav.classList.remove('active');
};

/* 
========================================
Carousel Slide
========================================
*/
