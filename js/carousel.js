const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right ');
const previousButton = document.querySelector('.carousel__button--left');
const barsNav = document.querySelector('.carousel__nav');
const bars = Array.from(barsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arranging slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
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
