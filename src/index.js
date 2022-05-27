import TopMenu from './js/top-menu';
import MobileMenu from './js/mobile-menu';
import ContactPopup from './js/popup';
import Accordeon from './js/accordeon';
import Form from './js/form';
import Carousel from './js/carousel';

const Menu = new TopMenu({
  menuClass: 'js_fixed-menu',
  fixAfter: 105,
  fixClass: 'main-menu__bottom-line_fixed',
});
Menu.init();

const MobMenu = new MobileMenu({
  btnClass: 'js_mobile-menu-btn',
  menuClass: 'js_mobile-menu',
  btnActiveClass: 'main-menu__mobile-btn_active',
  menuActiveClass: 'mobile-menu_active',
});
MobMenu.init();

const ContactFormPopup = new ContactPopup({
  openBtnClass: 'js_open-form-btn',
  closeBtnClass: 'js_close-popup',
  popupClass: 'popup',
  popupActiveClass: 'popup_active'
});
ContactFormPopup.init();

const FooterMenu = new Accordeon({
  accordeonClass: 'js_footer-menu-accordeon',
  itemSelector: '.menu-links__link_plus',
  activeClass: 'menu-links__item_active',
  close: true,
});
FooterMenu.init();

const MobMenuAccordeon = new Accordeon({
  accordeonClass: 'js_mobile-menu-accordeon',
  itemSelector: '.menu-links__link_plus',
  activeClass: 'menu-links__item_active',
  close: true,
});
MobMenuAccordeon.init();

const HelpListsAccordeon = new Accordeon({
  accordeonClass: 'js_help-lists',
  itemSelector: '.popular-services__lists-title',
  activeClass: 'popular-services__help-lists_active',
  close: false,
});
HelpListsAccordeon.init();

const FeedbackForms = new Form({
  formClass: 'feedback-form',
  telClass: 'feedback-form__input-phone',
  postTo: './server.php',
  submitBtn: 'feedback-form__input-submit',
  loadingClass: 'feedback-form__input-submit_loading'
});
FeedbackForms.init();

const CertCarousel = new Carousel('certificates__wrapper');
CertCarousel.init();

const DoctorsCarousel = new Carousel('doctors__wrapper');
DoctorsCarousel.init();