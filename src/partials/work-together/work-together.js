import { sendUserDataApi } from './userDataApi';

const STORAGE_KEY = 'formData';

const formData = getFromLocalStorage() || {
  userEmail: '',
  userComments: '',
};

const form = document.querySelector('.js-submit-form');
const [inputEmail, inputComments] = form;
inputEmail.value = formData.userEmail;
inputComments.value = formData.userComments;

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  setToLocalStorage(formData);
});

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  const { userEmail, userComments } = formData;

  if (!userEmail || !userComments) {
    return;
  }

  try {
    const data = await sendUserDataApi({
      email: userEmail,
      comment: userComments,
    });

    // const { title, message } = data;
    // TODO open modal window

    resetData();
  } catch (error) {
    // izitoast
    console.error(error);
  }
}

// helpers
function setToLocalStorage(value, key = STORAGE_KEY) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromLocalStorage(key = STORAGE_KEY) {
  return JSON.parse(localStorage.getItem(key));
}

function resetData(key = STORAGE_KEY) {
  localStorage.removeItem(key);
  form.reset();
  formData.userEmail = '';
  formData.userComments = '';
}
