const section = {
  cards: document.querySelectorAll('.marquee__card'),
  covers: document.querySelector('.covers'),
};

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

let animationCovers = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      section.cards.forEach(card => {
        card.classList.add('animation');
      });
      return;
    }
    section.cards.forEach(card => {
      card.classList.remove('animation');
    });
  });
};

let observer = new IntersectionObserver(animationCovers, options);
observer.observe(section.covers);
