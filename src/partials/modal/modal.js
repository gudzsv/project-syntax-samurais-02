const btnClose = document.querySelector('.window-btn');
const windowBackdrop = document.querySelector('.backdrop');
const modalTitle = document.querySelector('.window-title');
const modalText = document.querySelector('.window-text');

const OPEN_CLASS = 'is-open';

export const openModalWithData = data => {
  windowBackdrop.classList.add(OPEN_CLASS);
  renderModalData(data);
};

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
  windowBackdrop.classList.remove(OPEN_CLASS);
  clearModalData();
}

function renderModalData({ title = '', message = '' }) {
  modalTitle.textContent = title;
  modalText.textContent = message;
}

function clearModalData() {
  modalTitle.textContent = '';
  modalText.textContent = '';
}
