export default class Form {
  constructor({ formClass, telClass, postTo, submitBtn, loadingClass }) {
    this.forms = document.querySelectorAll(`.${formClass}`);
    this.telInputs = document.querySelectorAll(`.${telClass}`);
    this.postTo = postTo;
    this.submitBtn = submitBtn;
    this.loadingClass = loadingClass;
  }

  async postData(data) {
    let res = await fetch(this.postTo, {
      method: 'POST',
      body: data,
    });

    return res;
  }

  setListeners() {
    try {
      this.forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();

          const formCopy = form.innerHTML;
          const btn = form.querySelector(`.${this.submitBtn}`);
          btn.textContent = 'Загрузка';
          btn.classList.add(this.loadingClass);

          const formData = new FormData(form);
          this.postData(formData)
            .then((res) => {
              console.log(res);
              if (!res.ok) {
                throw new Error('Ошибка сервера!');
              }

              form.innerHTML = `
          <h2 class="feedback-form__title">Сообщение отправлено</h2>
          <p class="feedback-form__desc">
          Ваше сообщение отправлено, скоро мы свяжемся с вами
          </p>
          <button
              class="feedback-form__close-btn btn btn_color-dark js_close-popup"
              type="button"
            >
              Спасибо
            </button>
          `;
            })
            .catch(() => {
              form.innerHTML = `
            <h2 class="feedback-form__title">Произошла ошибка</h2>
            <p class="feedback-form__desc">
            Попробуйте снова или свяжитесь с нами другим способом
            </p>
            <button
                class="feedback-form__close-btn btn btn_color-blue js_close-popup"
                type="button"
              >
                Закрыть
              </button>
          `;
            })
            .finally(() => {
              setTimeout(() => {
                form.innerHTML = formCopy;
              }, 7000);
            });
        });
      });
    } catch (e) {}
  }

  init() {
    this.setListeners();
  }
}
