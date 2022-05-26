export default class TopMenu {
  constructor(selector, scrollAfterFix, fixClass) {
    this.menu = document.querySelector(selector);
    this.scrollAfterFix = scrollAfterFix;
    this.fixClass = fixClass;
  }

  setListener() {
    window.addEventListener('scroll', () => {
      if (
        document.documentElement.scrollTop > this.scrollAfterFix &&
        !this.menu.classList.contains(this.fixClass)
      ) {
        this.menu.classList.add(this.fixClass);
      } else if (
        document.documentElement.scrollTop < this.scrollAfterFix &&
        this.menu.classList.contains(this.fixClass)
      ) {
        this.menu.classList.remove(this.fixClass);
      }
    });
  }

  init() {
    this.setListener();
  }
}
