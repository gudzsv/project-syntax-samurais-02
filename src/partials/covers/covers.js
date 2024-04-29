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
        // console.log('add');
      });
      return;
    }
    section.cards.forEach(card => {
      card.classList.remove('animation');
      // console.log('remove');
    });
  });
};

let observer = new IntersectionObserver(animationCovers, options);
observer.observe(section.covers);
