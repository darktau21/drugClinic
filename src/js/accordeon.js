export default class Accordeon {
  constructor({ accordeonClass, itemSelector, activeClass, close }) {
    this.container = document.querySelector(`.${accordeonClass}`);
    try {
      this.items = this.container.querySelectorAll(itemSelector);
    } catch (e) {}
    this.activeClass = activeClass;
    this.close = close;
  }

  setListeners() {
    try {
      this.items.forEach((item) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          let parent = item.parentElement;

          if (parent.classList.contains(this.activeClass)) {
            parent.classList.remove(this.activeClass);
          } else {
            this.closeAll();
            parent.classList.add(this.activeClass);
          }
        });
      });

      if (this.close) {
        window.addEventListener('click', (e) => {
          if (!e.target.classList.contains(this.container)) {
            this.closeAll();
          }
        });
      }
    } catch (e) {}
  }

  closeAll() {
    try {
      this.items.forEach((item) => {
        item.parentElement.classList.remove(this.activeClass);
      });
    } catch (e) {}
  }

  init() {
    this.setListeners();
  }
}
