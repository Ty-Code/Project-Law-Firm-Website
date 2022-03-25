import { articleData } from '../data/articlesData.js';

const textContainer = document.querySelector('.text-container');

const params = new URLSearchParams(window.location.search);

const articleId = parseInt(params.get('articleId'));

const selectedArticle = articleData.find((article, i) => i === articleId);

function pageCreator(selectedArticle) {
  const element = document.createElement('div');
  element.classList.add('text-box');
  // element.classList.add('active');

  element.innerHTML = String.raw`
<h3>${selectedArticle.title}</h3>
<div>${selectedArticle.text}</div>
`;

  textContainer.appendChild(element);
}

window.addEventListener('load', () => {
  pageCreator(selectedArticle);
});
