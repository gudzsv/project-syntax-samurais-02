import Swiper from 'swiper';
import 'swiper/css/bundle';

import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

const swiperAboutMe = new Swiper('#swiperAbout', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.about-me-btn-swipe',
  },
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
  touch: true,
  centeredSlides: false,
  loop: true,
  speed: 500,
  spaceBetween: 0,
  slideToClickedSlide: true,
  allowTouchMove: true,
  slidesPerView: 2,
  width: 260,
  breakpoints: {
    768: {
      slidesPerView: 3,
      width: 600,
    },
    1440: {
      slidesPerView: 6,
      width: 1200,
    },
  },
});
