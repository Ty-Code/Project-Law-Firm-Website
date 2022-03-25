import { newsData } from './data/newsData.js';
const articleContainer = document.querySelector('.article__container');

for (const article of newsData) {
  const newElement = creator(article);
  articleContainer.appendChild(newElement);
}

function creator(article) {
  const element = document.createElement('div');
  element.classList.add('article-box');

  element.innerHTML = String.raw`
    <h5>${article.date}</h5>
    <h3>${article.title}</h3>
    ${article.text.slice(0, 120)}...
    <h5>${article.Writer}</h5>`;

  return element;
}

const articleBoxes = document.querySelectorAll('.article-box');

const textContainer = document.querySelector('.text-container');

const textBoxes = textContainer.children;

[...articleBoxes].forEach((articleBox) => {
  articleBox.addEventListener('click', (evt) => selector(newsData, evt));
  articleBox.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

function selector(newsData, evt) {
  const selectedArticle = newsData.find((article) => {
    const title = article.title;
    return evt.target.offsetParent.innerText.includes(title);
  });

  let currentText;
  if ([...textBoxes].some((box) => box.classList.contains('active'))) {
    currentText = textContainer.querySelector('.active');
  }

  if (currentText) {
    currentText.classList.remove('active');
  }

  const element = document.createElement('div');
  element.classList.add('text-box');
  element.classList.add('active');

  element.innerHTML = String.raw`
<h5>${selectedArticle.date}</h5>
<h3>${selectedArticle.title}</h3>
<div>${selectedArticle.text}</div>
`;
  textContainer.appendChild(element);
}
