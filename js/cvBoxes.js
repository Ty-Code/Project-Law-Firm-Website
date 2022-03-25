const thumbnailContainer = document.querySelector('.thumbnail__container');

const thumbnails = thumbnailContainer.querySelectorAll('.cv-thumbnail');

const cvBox = document.querySelector('.cv-box');
const articles = cvBox.children;

thumbnails.forEach((el) => {
  el.addEventListener('click', pickTitle);
  el.addEventListener('click', () =>
    document.querySelector('.cv-box').scrollIntoView({
      behavior: 'smooth',
    })
  );
});

function pickTitle(e) {
  const selectedTitle = e.target.offsetParent.innerText;

  const selectedThumbnail = e.target.offsetParent;

  let currentArticle;
  if ([...articles].some((article) => article.classList.contains('active'))) {
    currentArticle = cvBox.querySelector('.active');
  }

  let currentThumbnail;
  if ([...thumbnails].some((thumbnail) => thumbnail.classList.contains('active'))) {
    currentThumbnail = thumbnailContainer.querySelector('.active');
  }

  const selectedArticle = [...articles].find((article) =>
    selectedTitle.includes(article.firstElementChild.textContent)
  );
  if (currentArticle) {
    currentArticle.classList.remove('active');
  }

  if (currentThumbnail) {
    currentThumbnail.classList.remove('active');
  }

  selectedThumbnail.classList.add('active');
  selectedArticle.classList.add('active');
}
