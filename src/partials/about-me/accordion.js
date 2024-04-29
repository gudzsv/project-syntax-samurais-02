import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  const btnAcc = [...document.querySelectorAll('.about-me-btn')][0];
  btnAcc.classList.add('btn-active');

  const accAboutMe = new Accordion('#accordionAbout', {
    openOnInit: [0],
    showMultiple: true,
    beforeOpen: function (accAboutMe) {
      const btn = accAboutMe.querySelector('.about-me-btn.ac-trigger');
      btn.classList.add('btn-active');
    },
    beforeClose: function (accAboutMe) {
      const btn = accAboutMe.querySelector('.about-me-btn.ac-trigger');
      btn.classList.remove('btn-active');
    },
  });
});
