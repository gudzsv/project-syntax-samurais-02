import Swiper from 'swiper';
import 'swiper/css/bundle';

const reviewsList = document.querySelector(".swiper-wrapper");

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
    <div class="swiper-slide review">
                <img src="${review.avatar_url}" alt="Reviewer" class="reviewer-image"/>
                <h3 class="reviewer-name">${review.author}</h3>
                <p class="reviewer-text">${review.review}</p>
            </div>
    `).join('');

    reviewsList.insertAdjacentHTML('beforeend', listHTML);
}

async function loadReviews() {
    try
    {
        const reviews = await fetchReviews();
        fiilList(reviews);

    }
    catch (error)
    {

    }
}

loadReviews();

const swiper = new Swiper('.swiper',{
    navigation: {

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'

    },
})