const sideMenu = document.querySelector('.sidebar-menu');
const sideMenuElements = sideMenu.children;
const areasMenu = document.querySelector('.areas-section');
const areasArticles = areasMenu.children;

[...sideMenuElements].forEach((el) => el.addEventListener('click', pickTitle));

function pickTitle(e) {
  const selectedTitle = e.target.textContent;
  const currentArticle = areasMenu.querySelector('.active');

  const selectedArticle = [...areasArticles].find(
    (article) => article.firstElementChild.textContent === selectedTitle
  );
  currentArticle.classList.remove('active');
  selectedArticle.classList.add('active');
}
