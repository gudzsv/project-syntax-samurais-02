document.addEventListener('DOMContentLoaded', function() {
  const projectItems = document.querySelectorAll('.project-list-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;
  let prevIndex = 0; 

  projectItems.forEach((item, index) => {
    if (index !== currentIndex) {
      item.style.display = 'none';
    }
  });

  function showCurrentCard() {
    projectItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === projectItems.length - 1;
  }

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      prevIndex = currentIndex; 
      currentIndex--;
      showCurrentCard();
      projectItems[prevIndex].style.animation = 'slideRightToLeft 0.2s';
      projectItems[currentIndex].style.animation = 'slideRightToLeft 0.2s';
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < projectItems.length - 1) {
      prevIndex = currentIndex; 
      currentIndex++;
      showCurrentCard();
      projectItems[prevIndex].style.animation = 'slideLeftToRight 0.2s';
      projectItems[currentIndex].style.animation = 'slideLeftToRight 0.2s';
    }
  });

  document.addEventListener('keydown', function(event) {
  
    if (event.code === 'ArrowLeft' && currentIndex > 0) {
      prevIndex = currentIndex; 
      currentIndex--;
      showCurrentCard();
      projectItems[prevIndex].style.animation = 'slideRightToLeft 0.2s';
      projectItems[currentIndex].style.animation = 'slideRightToLeft 0.2s';
    } else if (event.code === 'ArrowRight' && currentIndex < projectItems.length - 1) {
      prevIndex = currentIndex;
      currentIndex++;
      showCurrentCard();
      projectItems[prevIndex].style.animation = 'slideLeftToRight 0.2s';
      projectItems[currentIndex].style.animation = 'slideLeftToRight 0.2s';
    }
  });

  showCurrentCard();
});
