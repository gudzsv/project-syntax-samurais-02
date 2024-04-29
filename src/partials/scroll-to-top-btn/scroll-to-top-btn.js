const btnTop = document.querySelector('#scroll-top');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  btnTop.style.display = window.scrollY > 250 ? 'flex' : 'none';
}

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
