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
menuList.addEventListener('click', handleMenuClick);
orderBtn.addEventListener('click', handleCloseClick);
burgerMenuList.addEventListener('click', handleCloseClick);

document.body.addEventListener('click', event => {
    if (!menuList.classList.contains('visually-hidden') && !event.target.classList.contains('menu-link')) {
        handleMenuClick();
    }
})

document.addEventListener('keydown', event => {
    if (event.key ==='Escape' && !menuList.classList.contains('visually-hidden')) {
        handleMenuClick();
    }
})

const dropDownKeyframes = new KeyframeEffect(
    menuList,
    [{ opacity: "0",
      transform: "translateY(-100%)"
    },
    { opacity: "1",
      transform: "translateY(0)"
    }],
    { duration: 500 });

const dropUpKeyframes = new KeyframeEffect(
    menuList,
    [{ opacity: "1",
      transform: "translateY(0)"
    },
    { opacity: "0",
      transform: "translateY(-100%)"
    }],
    { duration: 500 });

const dropDownAnimation = new Animation(
    dropDownKeyframes,
    document.timeline
)

const dropUpAnimation = new Animation(
    dropUpKeyframes,
    document.timeline
)

const openKeyframes = new KeyframeEffect(
    burgerMenu,
    [{ transform: "translateX(100%)"
    },
    { transform: "translateX(0)"
    }],
    { duration: 500 }
)

const closeKeyframe = new KeyframeEffect(
    burgerMenu,
    [{ transform: "translateX(0)"
    },
    { transform: "translateX(100%)"
    }],
    { duration: 500 }
)

const openBurgerAnimation = new Animation(
    openKeyframes,
    document.timeline
)

const closeBurgerAnimation = new Animation(
    closeKeyframe,
    document.timeline
)

function handleMenuClick() {  
    if (menuList.classList.contains('visually-hidden')) {   
        dropDownAnimation.play();
        menuList.classList.remove('visually-hidden');
        return;
    }
    dropUpAnimation.play();
    setTimeout(() => {
        menuList.classList.add('visually-hidden');
    }, 500);
}

function handleBurgerClick() {
    burgerMenu.classList.add('is-open');
    openBurgerAnimation.play();
    document.body.style.overflow = 'hidden';
}

function handleCloseClick() {
    closeBurgerAnimation.play();
    setTimeout(() => {
        burgerMenu.classList.remove('is-open');
    }, 500);
    document.body.style.overflow = '';
}

