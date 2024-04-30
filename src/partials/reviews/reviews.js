import Swiper from 'swiper/bundle';
import iziToast from 'izitoast';
import "swiper/css/bundle";

const reviewsList = document.querySelector("#reviews-list");
const buttonNext = document.querySelector(".swiper-button-next"); 
const buttonPrev = document.querySelector(".swiper-button-prev");
let quantitySlides;

function setQSlides() {
    const windowWidth = window.innerWidth;
    const slide = document.querySelector('.swiper-slide');
    if (windowWidth < 768)
    {
        quantitySlides = 1;
    }
    else if (windowWidth < 1440)
    {
        quantitySlides = 2
    }
    else
    {
        quantitySlides = 4;
    }

}

async function fetchReviews() {
    try
    {
        const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
        if (response.status != 200) { throw new Error('Failed to fetch reviews'); }
        
        const reviews = await response.json();
        return reviews;
    }
    catch (error)
    {
        iziToast.error({
        title: 'Error',
        message: `${error.message}`,
        });
      
        errorList();
    }
}

function fiilList(reviews) {
    reviewsList.innerHTML = '';
    
    const listHTML = reviews.map(review => `
    <li class="swiper-slide" id="review">
        <img src="${review.avatar_url}" alt="Reviewer" class="reviewer-image" />
        <h5 class="reviewer-name header-5">${review.author}</h5>
        <p class="main-text-with-opacity">${review.review}</p>
    </li>
    `).join('');

    reviewsList.insertAdjacentHTML('beforeend', listHTML);
}

function errorList() {
  reviewsList.innerHTML = '';
    
  const listHTML = `<p class="reviewer-text">Not Found</p>`;

  reviewsList.insertAdjacentHTML('beforeend', listHTML);
}

async function loadReviews() {
    try
    {
        const reviews = await fetchReviews();
        fiilList(reviews);
        const swiper = new Swiper('.swiper', {

            navigation: {
                nextEl: buttonNext,
                prevEl: buttonPrev,
            },

            slidesPerView: quantitySlides,
            slidesPerGroup: quantitySlides,
            spaceBetween: 16,

            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true
            },

            mousewheel: {
                sensitivity: 1,
            }

        });
    }
    catch (error)
    {
        iziToast.error({
        title: 'Error',
        message: `${error.message}`,
        });
    }
}

loadReviews();
setQSlides();

window.addEventListener('resize', function () {
    setQSlides();
    loadReviews();
});