import Swiper from 'swiper';
import 'swiper/css';

const swiperAboutMe = new Swiper('#swiperAbout', {
  loop: true,
  speed: 500,
  cssMode: true,
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

const swipeBtn = document.querySelector('.about-me-btn-swipe');

swipeBtn.addEventListener('click', function () {
  swiperAboutMe.slideNext();
  swiperAboutMe.updateSize();
  swiperAboutMe.updateSlides();
});
