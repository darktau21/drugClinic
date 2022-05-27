export default class Sldier {
  constructor(container) {
    this.container = document.querySelector(`.${container}`);
    this.wrapper = document.querySelector('.slider-wrapper');
    this.inner = this.container.querySelector('.slider-inner');
    try {
      this.scrollVal = this.wrapper.clientWidth;
      this.slidesCount = this.slidesCount = Math.round(this.wrapper.scrollWidth / this.scrollVal);
    } catch (e) {}
    this.currentSlide = 0;
    this.prevBtn = this.container.querySelector('.slider-btn-prev');
    this.nextBtn = this.container.querySelector('.slider-btn-next');
  }

  checkSlide() {
    if (this.currentSlide == -1) {
      this.currentSlide++;
    }
    if (this.currentSlide == this.slidesCount) {
      this.currentSlide--;
    }
  }

  changeSlide() {
    try {
      this.inner.style.transform = `translateX(-${100 * this.currentSlide}%)`;
    } catch (e) {}
  }

  prevSlide() {
    this.currentSlide--;
    this.checkSlide();
    this.changeSlide();
  }

  nextSlide() {
    this.currentSlide++;
    this.checkSlide();
    this.changeSlide();
  }

  setListeners() {
    this.prevBtn.addEventListener('click', () => {
      this.prevSlide();
    });
    this.nextBtn.addEventListener('click', () => {
      this.nextSlide();
    });
  }

  init() {
    try {
      this.setListeners();
    } catch (e) {}
  }
}
