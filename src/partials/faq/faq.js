import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.faq-item');

  accordionItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const content = item.querySelector('.answer');

    btn.addEventListener('click', function () {
      if (content.style.display === 'flex') {
        content.style.display = 'none';
      } else {
        content.style.display = 'flex';
      }
    });
  });
});
const faqs = document.querySelectorAll('.faq-item');

faqs.forEach(faq =>
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  })
);
