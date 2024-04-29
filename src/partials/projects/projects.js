document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-list-item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
  
    let currentIndex = 0;
  
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
        currentIndex--;
        showCurrentCard();
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (currentIndex < projectItems.length - 1) {
        currentIndex++;
        showCurrentCard();
      }
    });
  
    document.addEventListener('keydown', function(event) {
    
      if (event.code === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--;
        showCurrentCard();
      } else if (event.code === 'ArrowRight' && currentIndex < projectItems.length - 1) {
        currentIndex++;
        showCurrentCard();
      }
    });
  
    showCurrentCard();
  });
