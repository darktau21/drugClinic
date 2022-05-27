import FullImg from './full-img';

export default class FullComment extends FullImg {
  setCommentListeners() {
    try {
      this.container.addEventListener('click', (e) => {
        if (e.target.classList.contains('comment__show-full')) {
          e.preventDefault();
          let comment = e.target.parentElement.cloneNode({
            deep: true,
          });
          comment.querySelector('.comment__show-full').remove();
          comment.classList.add('comment_show');

          this.popup.innerHTML = '';
          let div = document.createElement('div');
          div.style.overflow = 'auto';
          div.style.height = '100%';
          div.style.display = 'flex';
          div.style.flexDirection = 'column';
          div.style.alignItems = 'center';
          div.style.justifyContent = 'center';
          comment.classList.remove('reviews__comment');
          div.append(comment);
          this.popup.append(div);
          this.open();
        }
      });
    } catch (e) {}
  }

  init() {
    this.setCommentListeners();
    this.setCloseListeners();
  }
}
