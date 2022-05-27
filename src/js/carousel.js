export default class Carousel {
  constructor(containerClass) {
    this.wrapper = document.querySelector(`.${containerClass}`);
    this.container = this.wrapper.firstElementChild;
    this.scrollWidth = this.wrapper.clientWidth * 0.6;

  }

  setListeners() {
    console.log(this.container)
    this.wrapper.querySelector('.carousel__btn_next').addEventListener('click', () => {
      this.container.scrollBy({
        left: this.scrollWidth,
        behavior: 'smooth'
      });
    });
    this.wrapper.querySelector('.carousel__btn_prev').addEventListener('click', () => {
      this.container.scrollBy({
        left: -1 * this.scrollWidth,
        behavior: 'smooth'
      });
    });
  }

  init() {
    this.setListeners();
  }
}