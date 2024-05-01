import Accordion from 'accordion-js';
new Accordion('.accordion-container-faq', {
  duration: 900,
  showMultiple: true,
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.faq-item');
  faqs.forEach(faq =>
    faq.addEventListener('click', () => {
      faq.classList.toggle('active');
    })
  );

  accordionItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const content = item.querySelector('.ac-panel');

    btn.addEventListener('click', function () {
      if (content.style.display === 'flex') {
        content.style.overflow = 'hidden';
      } else {
        content.style.display = 'flex';
      }
    });
  });
});
const faqs = document.querySelectorAll('.faq-item');
