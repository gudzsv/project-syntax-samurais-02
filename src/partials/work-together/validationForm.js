import {
  validEmailSpan,
  invalidEmailSpan,
  invalidCommentSpan,
  inputEmail,
  inputComments,
} from './elements.js';

const VALIDATION_CLASS = {
  valid: 'valid-input',
  invalid: 'invalid-input',
  isVisible: 'is-visible',
};

export const validateEmail = email => {
  const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const isValidEmail = pattern.test(email);

  if (!isValidEmail) {
    inputEmail.classList.add(VALIDATION_CLASS.invalid);
    invalidEmailSpan.classList.add(VALIDATION_CLASS.isVisible);
  } else {
    inputEmail.classList.add(VALIDATION_CLASS.valid);
    validEmailSpan.classList.add(VALIDATION_CLASS.isVisible);
  }
  return isValidEmail;
};

export const validateText = text => {
  if (!text) {
    inputComments.classList.add(VALIDATION_CLASS.invalid);
    invalidCommentSpan.classList.add(VALIDATION_CLASS.isVisible);
  } else {
    inputComments.classList.add(VALIDATION_CLASS.valid);
  }
  return !!text;
};

export const resetFieldValidation = field => {
  const fieldName = field.name;

  if (fieldName === 'userEmail') {
    validEmailSpan.classList.remove(VALIDATION_CLASS.isVisible);
    invalidEmailSpan.classList.remove(VALIDATION_CLASS.isVisible);
  }

  if (fieldName === 'userComments') {
    invalidCommentSpan.classList.remove(VALIDATION_CLASS.isVisible);
  }

  field.classList.remove(VALIDATION_CLASS.valid);
  field.classList.remove(VALIDATION_CLASS.invalid);
};

export const resetAllValidation = () => {
  const validationSpans = [
    validEmailSpan,
    invalidEmailSpan,
    invalidCommentSpan,
  ];

  validationSpans.forEach(spanElement => {
    spanElement.classList.remove(VALIDATION_CLASS.isVisible);
  });

  const validationInputs = [inputEmail, inputComments];

  validationInputs.forEach(input => {
    input.classList.remove(VALIDATION_CLASS.valid);
    input.classList.remove(VALIDATION_CLASS.invalid);
  });
};
