const btnClose = document.querySelector('.window-btn');
const windowBackdrop = document.querySelector('.backdrop');

btnClose.addEventListener('click', () => {
  closeWindow();
});

windowBackdrop.addEventListener('click', event => {
  if (event.target === windowBackdrop) {
    closeWindow();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeWindow();
  }
});

function closeWindow() {
  windowBackdrop.classList.remove('is-open');
}
