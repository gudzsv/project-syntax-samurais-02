// console.log('HEADER');
const menuBtn = document.querySelector('.menu-link');
const menuList = document.querySelector('.menu-list')

menuBtn.addEventListener('click', handleClick);

function handleClick() {
    menuList.classList.toggle('hidden');
}