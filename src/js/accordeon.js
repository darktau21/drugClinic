export default class Accordeon {
  constructor(accrodeonClass, itemSelector, activeClass) {
    this.container = document.querySelector(`.${accrodeonClass}`);
    this.items = this.container.querySelectorAll(itemSelector);
    this.activeClass = activeClass;
  }

  setListeners() {
    this.items.forEach(item => {
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
  }

  closeAll() {
    this.items.forEach(item => {
      item.parentElement.classList.remove(this.activeClass);
    });
  }

  init() {
    this.setListeners();
  }
}