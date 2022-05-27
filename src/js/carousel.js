export default class Carousel {
  constructor(containerClass) {
    this.wrapper = document.querySelector(`.${containerClass}`);
    try {
      this.container = this.wrapper.firstElementChild;
      this.scrollWidth = this.wrapper.clientWidth * 0.6;
    } catch (e) {}
  }

  setListeners() {
    try {
      this.wrapper.querySelector('.carousel__btn_next').addEventListener('click', () => {
        this.container.scrollBy({
          left: this.scrollWidth,
          behavior: 'smooth',
        });
      });
      this.wrapper.querySelector('.carousel__btn_prev').addEventListener('click', () => {
        this.container.scrollBy({
          left: -1 * this.scrollWidth,
          behavior: 'smooth',
        });
      });
    } catch (e) {}
  }

  init() {
    this.setListeners();
  }
}
