import Accordion from 'accordion-js';

const btnAcc = document.querySelector('.about-me-btn');
btnAcc.classList.add('btn-active');
const titleAcc = document.querySelector('.about-me-chapter .section-title');
titleAcc.classList.add('active');

const accAboutMe = new Accordion('#accordionAbout', {
  openOnInit: [0],
  showMultiple: true,
  beforeOpen: function (accAboutMe) {
    const btn = accAboutMe.querySelector('.about-me-btn.ac-trigger');
    btn.classList.add('btn-active');
    const title = accAboutMe.querySelector('.about-me-chapter .section-title');
    title.classList.add('active');
  },
  beforeClose: function (accAboutMe) {
    const btn = accAboutMe.querySelector('.about-me-btn.ac-trigger');
    btn.classList.remove('btn-active');
    const title = accAboutMe.querySelector('.about-me-chapter .section-title');
    title.classList.remove('active');
  },
});
