
/* 
========================================
Carousel
========================================
*/

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right ');
const previousButton = document.querySelector('.carousel__button--left');
const barsNav = document.querySelector('.carousel__nav');
const bars = Array.from(barsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arranging slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'vh';
};
slides.forEach(setSlidePosition);

//moving slides
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateBars = (currentBar, targetBar) => {
  currentBar.classList.remove('current-slide');
  targetBar.classList.add('current-slide');
};

const hideShowArrows = (slides, previousButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    previousButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    previousButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    previousButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
};

//moving left
previousButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  const previousSlide = currentSlide.previousElementSibling;
  const currentBar = barsNav.querySelector('.current-slide');
  const previousBar = currentBar.previousElementSibling;
  const previousIndex = slides.findIndex((slide) => slide === previousSlide);

  moveToSlide(track, currentSlide, previousSlide);
  updateBars(currentBar, previousBar);
  hideShowArrows(slides, previousButton, nextButton, previousIndex);
});

//moving right
nextButton.addEventListener('click', (e) => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentBar = barsNav.querySelector('.current-slide');
  const nextBar = currentBar.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateBars(currentBar, nextBar);
  hideShowArrows(slides, previousButton, nextButton, nextIndex);
});

//bar indicators
barsNav.addEventListener('click', (e) => {
  const targetBar = e.target.closest('button');

  if (!targetBar) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentBar = barsNav.querySelector('.current-slide');
  const targetIndex = bars.findIndex((bar) => bar === targetBar);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateBars(currentBar, targetBar);
  hideShowArrows(slides, previousButton, nextButton, targetIndex);
});



/* 
========================================
Content of Carousel
========================================
*/

import { articleData } from './data/articlesData.js';

const textContainers = document.querySelectorAll('.carousel__slide');

[...textContainers].forEach((textContainer, i) => {
  if (i < 3) {
    const newElement = createCarousel(articleData[i++]);
    textContainer.appendChild(newElement);
  }
});

function createCarousel(article) {
  const element = document.createElement('section');
  const articleId = articleData.indexOf(article);

  element.classList.add('carousel__text');

  element.innerHTML = String.raw`
    <h1>${article.title}</h1>
    <a href="./html/pages/publicationsPage.html?articleId=${articleId}" class="news-links" target="_blank">Read more <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
    `;

  return element;
}
/* 
========================================
Columns of News
========================================
*/

import { newsData } from './data/newsData.js';

const thumbnailContainer = document.querySelector('.thumbnail-container');

for (const article of newsData) {
  const newElement = createColumns(article);
  thumbnailContainer.appendChild(newElement);
}

function createColumns(article) {
  const element = document.createElement('div');
  const articleId = newsData.indexOf(article);
  element.classList.add('thumbnail-box');

  element.innerHTML = String.raw`
  <figure class="thumbnail-box__img">
  <img src="${article.image}" alt="news image" />
  </figure>
  <div class="thumbnail-box__article">
  
    <h3>${article.title}</h3>
    <h5>${article.date}</h5>
    ${article.text.slice(0, 120)}...
    <a href="./html/pages/newsPage.html?articleId=${articleId}" class="news-links" target="_blank">Read more <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
    </div>
    `;

  return element;
}

/* 
========================================
Rows of publications
========================================
*/

const ulElement = document.querySelector('.publication__list');
const liElements = ulElement.children;



[...liElements].forEach((liElement, i) => {
  if (i < 3) {
    const newElement = createRows(articleData[i++]);
    liElement.appendChild(newElement);
  }
});

function createRows(article) {
  const element = document.createElement('a');
  const articleId = articleData.indexOf(article);

  element.setAttribute('href', `./html/pages/publicationsPage.html?articleId=${articleId}`);
  element.setAttribute('target', '_blank');
  element.textContent = article.title;

  return element;
}

//! to grab articles by title when clicked on
// const newsLinks = thumbnailContainer.querySelectorAll('.news-links');

// [...newsLinks].forEach((newsLink) =>
//   newsLink.addEventListener('click', (evt) => selector(articleData, evt))
// );

// let selectedArticle;
// function selector(articleData, evt) {
//   selectedArticle = articleData.find((article) => {
//     const title = article.title;
//     return evt.target.offsetParent.innerText.includes(title);
//   });
// }

// export let selected = selectedArticle;
