import Swiper from 'swiper';
import 'swiper/css';

import 'swiper/css/mousewheel';

import { Navigation, Autoplay, Keyboard, Mousewheel } from 'swiper/modules';

const swiperAboutMe = new Swiper('#swiperAbout', {
  modules: [Navigation, Autoplay, Keyboard, Mousewheel],
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
  // autoplay: {
  //   delay: 2000,
  // },
});
