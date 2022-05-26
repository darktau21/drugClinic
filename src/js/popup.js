export default class ContactPopup {
  constructor(openBtnClass, closeBtnClass, popupClass, popupActiveClass) {
    this.openBtns = document.querySelectorAll(`.${openBtnClass}`);
    this.closeBtnClass = closeBtnClass;
    this.popup = document.querySelector(`.${popupClass}`);
    this.popupActiveClass = popupActiveClass;
  }

  setOpenListeners() {
    this.openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!this.popup.classList.contains(this.popupActiveClass)) {
          this.popup.classList.add(this.popupActiveClass);
          document.body.style.overflow = 'hidden';
        }
      });
    });
  }

  setCloseListeners() {
    this.popup.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.classList.contains(this.popupActiveClass) ||e.target.classList.contains(this.closeBtnClass)) {
        this.popup.classList.remove(this.popupActiveClass);
        document.body.style.overflow = '';
      }
    });
  }

  init() {
    this.setOpenListeners();
    this.setCloseListeners();
  }
}
