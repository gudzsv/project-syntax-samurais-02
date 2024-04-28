import Swiper from 'swiper/bundle';
import "swiper/css/bundle";

const reviewsList = document.querySelector(".swiper-wrapper");
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
        throw new Error('Failed to fetch reviews: ' + error.message);
    }
}

function fiilList(reviews) {
    reviewsList.innerHTML = '';
    
    const listHTML = reviews.map(review => `
    <li class="swiper-slide" id="review">
        <img src="${review.avatar_url}" alt="Reviewer" class="reviewer-image" />
        <h3 class="reviewer-name">${review.author}</h3>
        <p class="reviewer-text">${review.review}</p>
    </li>
    `).join('');

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

    }
}

loadReviews();
setQSlides();

window.addEventListener('resize', function () {
    setQSlides();
    loadReviews();
});