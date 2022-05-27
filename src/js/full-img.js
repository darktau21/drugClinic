export default class FullImg {
  constructor(containerClass) {
    this.container = document.querySelector(`.${containerClass}`);
    this.popup = document.querySelector('.img-popup');
  }

  setCloseListeners() {
    try {
      this.popup.addEventListener('click', () => {
        this.popup.classList.remove('popup_active');
        document.body.style.overflow = '';
      });
    } catch (e) {}
  }

  open() {
    this.popup.classList.add('popup_active');
    document.body.style.overflow = 'hidden';
  }

  setImgListeners() {
    try {
      this.container.addEventListener('click', (e) => {
        let src;
        if (e.target.tagName == 'IMG') {
          src = e.target.src;
        } else {
          src = e.target.querySelector('img').src;
        }

        this.popup.innerHTML = `
      <img src="${src}" style="max-width: 100%; max-height: 100%;" />
      `;

        this.open();
      });
    } catch (e) {}
  }

  init() {
    this.setImgListeners();
    this.setCloseListeners();
  }
}
