document.addEventListener('DOMContentLoaded', function() {
  const projectItems = document.querySelectorAll('.project-list-item');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;
  let prevIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

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
      projectItems[prevIndex].style.animation = 'slideRightToLeft 0.7s ease-in-out';
      projectItems[currentIndex].style.animation = 'slideRightToLeft 0.7s ease-in-out';
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentIndex < projectItems.length - 1) {
      prevIndex = currentIndex; 
      currentIndex++;
      showCurrentCard();
      projectItems[prevIndex].style.animation = 'slideLeftToRight 0.7s ease-in-out';
      projectItems[currentIndex].style.animation = 'slideLeftToRight 0.7s ease-in-out';
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft' && currentIndex > 0) {
      prevIndex = currentIndex; 
      currentIndex--;
      showCurrentCard();
      projectItems[prevIndex].style.animation = 'slideRightToLeft 0.7s ease-in-out';
      projectItems[currentIndex].style.animation = 'slideRightToLeft 0.7s ease-in-out';
    } else if (event.code === 'ArrowRight' && currentIndex < projectItems.length - 1) {
      prevIndex = currentIndex;
      currentIndex++;
      showCurrentCard();
      projectItems[prevIndex].style.animation = 'slideLeftToRight 0.7s ease-in-out';
      projectItems[currentIndex].style.animation = 'slideLeftToRight 0.7s ease-in-out';
    }
  });

  document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
  });

  document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50; // Порог свайпа

    if (touchEndX - touchStartX > swipeThreshold) {
      // Свайп вправо
      if (currentIndex > 0) {
        prevIndex = currentIndex; 
        currentIndex--;
        showCurrentCard();
        projectItems[prevIndex].style.animation = 'slideRightToLeft 0.7s ease-in-out';
        projectItems[currentIndex].style.animation = 'slideRightToLeft 0.7s ease-in-out';
      }
    } else if (touchStartX - touchEndX > swipeThreshold) {
      // Свайп влево
      if (currentIndex < projectItems.length - 1) {
        prevIndex = currentIndex; 
        currentIndex++;
        showCurrentCard();
        projectItems[prevIndex].style.animation = 'slideLeftToRight 0.7s ease-in-out';
        projectItems[currentIndex].style.animation = 'slideLeftToRight 0.7s ease-in-out';
      }
    }
  }

  showCurrentCard();
});

