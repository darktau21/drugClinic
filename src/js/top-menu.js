export default class TopMenu {
  constructor({menuClass, fixAfter, fixClass}) {
    this.menu = document.querySelector(`.${menuClass}`);
    this.fixAfter = fixAfter;
    this.fixClass = fixClass;
  }

  setListener() {
    window.addEventListener('scroll', () => {
      if (
        document.documentElement.scrollTop > this.fixAfter &&
        !this.menu.classList.contains(this.fixClass)
      ) {
        this.menu.classList.add(this.fixClass);
      } else if (
        document.documentElement.scrollTop < this.fixAfter &&
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
