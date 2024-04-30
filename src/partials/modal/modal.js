const btnClose = document.querySelector('.window-btn');
const windowBackdrop = document.querySelector('.backdrop');
const OPEN_CLASS = 'is-open';
const body = document.querySelector('body');

export const openModalWithData = data => {
  windowBackdrop.classList.add(OPEN_CLASS);
  body.style.overflow = 'hidden';
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
  document.body.style.overflow = 'auto';
  clearModalData();
}

function renderModalData({ title = '', message = '' }) {
  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('window-title');
  modalTitle.textContent = title;

  const modalText = document.createElement('p');
  modalText.classList.add('window-text');
  modalText.textContent = message;
  clearModalData();

  const modalWindow = document.querySelector('.modal-window');
  modalWindow.appendChild(modalTitle);
  modalWindow.appendChild(modalText);
}

function clearModalData() {
  const modalTitle = document.querySelector('.window-title');
  const modalText = document.querySelector('.window-text');
  if (modalTitle) {
    modalTitle.remove();
  }
  if (modalText) {
    modalText.remove();
  }
}
