import Swiper from 'swiper';
import 'swiper/css';

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
  cssMode: true,
  loop: true,
  speed: 500,
  spaceBetween: 0,
  slideToClickedSlide: true,
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
