// console.log('HEADER');
const menuBtn = document.querySelector('.menu-link');
const menuList = document.querySelector('.menu-list')
const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.close-btn');
const orderBtn = document.querySelector('.burger-order-btn');
const burgerMenuList = document.querySelector('.burger-menu-list');

menuBtn.addEventListener('click', handleMenuClick);
burgerBtn.addEventListener('click', handleBurgerClick);
closeBtn.addEventListener('click', handleCloseClick);
orderBtn.addEventListener('click', handleCloseClick);
burgerMenuList.addEventListener('click', handleCloseClick);

const dropDownKeyframes = new KeyframeEffect(
    menuList,
    [{ opacity: "0",
      transform: "translateY(-100%)"
    },
    { opacity: "1",
      transform: "translateY(0)"
    }],
    { duration: 1000 });

const dropDownAnimation = new Animation(
    dropDownKeyframes,
    document.timeline
)

const openKeyframes = new KeyframeEffect(
    burgerMenu,
    [{ transform: "translateX(-100%)"
    },
    { transform: "translateX(0)"
    }],
    { duration: 1000 }
)

const openBurgerAnimation = new Animation(
    openKeyframes,
    document.timeline
)

function handleMenuClick() {
    menuList.classList.toggle('hidden');
    dropDownAnimation.play();
}

function handleBurgerClick() {
    burgerMenu.classList.remove('hidden');
    openBurgerAnimation.play();
}

function handleCloseClick() {
    burgerMenu.classList.add('hidden');
}

