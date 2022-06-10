export default class MobileMenu {
  constructor({btnClass, menuClass, btnActiveClass, menuActiveClass}) {
    this.btn = document.querySelector(`.${btnClass}`);
    this.menu = document.querySelector(`.${menuClass}`);
    this.btnActiveClass = btnActiveClass;
    this.menuActiveClass = menuActiveClass;
  }

  open() {
    this.btn.classList.add(this.btnActiveClass);
    this.menu.classList.add(this.menuActiveClass);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.btn.classList.remove(this.btnActiveClass);
    this.menu.classList.remove(this.menuActiveClass);
    document.body.style.overflow = '';
  }

  setListeners() {
    this.btn.addEventListener('click', () => {
      if (this.btn.classList.contains(this.btnActiveClass)) {
        this.close();
      } else {
        this.open();
      }
    });
  }

  init() {
    this.setListeners();
  }
}
