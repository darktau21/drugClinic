import TopMenu from './js/top-menu';
import MobileMenu from './js/mobile-menu';
import ContactPopup from './js/popup';
import Accordeon from './js/accordeon';

const Menu = new TopMenu('.js_fixed-menu', 105, 'main-menu__bottom-line_fixed');
Menu.init();

const MobMenu = new MobileMenu('js_mobile-menu-btn', 'js_mobile-menu', 'main-menu__mobile-btn_active', 'mobile-menu_active');
MobMenu.init();

const ContactFormPopup = new ContactPopup('js_open-form-btn', 'js_close-popup', 'popup', 'popup_active');
ContactFormPopup.init();

const FooterMenu = new Accordeon('js_footer-menu-accordeon','.menu-links__link_plus', 'menu-links__item_active');
FooterMenu.init();

const MobMenuAccordeon = new Accordeon('js_mobile-menu-accordeon','.menu-links__link_plus', 'menu-links__item_active');
MobMenuAccordeon.init();