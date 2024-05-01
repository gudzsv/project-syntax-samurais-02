import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import Swiper from 'swiper/bundle'
import "swiper/css/bundle"

const reviewsList = document.querySelector("#reviews-list");
const buttonNext = document.querySelector(".swiper-button-next");
const buttonPrev = document.querySelector(".swiper-button-prev");
let quantitySlides;
let flag = true;

function setQSlides() {
    const windowWidth = window.innerWidth;
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
      flag = true;
      return reviews;
    }
    catch (error)
    {
      return error;
    }
}

function fillList(reviews) {
    reviewsList.innerHTML = '';

    const listHTML = reviews.map(review => `
    <li class="swiper-slide" id="review">
        <img src="${review.avatar_url}" alt="Reviewer" class="reviewer-image" width = "48"
  height = "48" loading="lazy" />
        <h3 class="reviewer-name header-5">${review.author}</h3>
        <p class="main-text-with-opacity">${review.review}</p>
    </li>
    `).join('');

    reviewsList.insertAdjacentHTML('beforeend', listHTML);
}

function errorList() {

  const element = document.querySelector('.error');
  if (element) {
    element.remove();
  }

  const listHTML = `<p class="main-text-with-opacity error">Not Found</p>`;

  reviewsList.insertAdjacentHTML('beforebegin', listHTML);
}

async function loadReviews() {
    try
    {
        const reviews = await fetchReviews();
        fillList(reviews);
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
          },

          autoHeight: false,
          observer: true,

        });
      flag = true;
    }
    catch (error)
    {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, something went wrong with reviews.'
        });
      errorList();
      flag = false;
    }
}

setQSlides();
loadReviews();

window.addEventListener('resize', function () {
  if (flag) {
    setQSlides();
    loadReviews();
  }
});
