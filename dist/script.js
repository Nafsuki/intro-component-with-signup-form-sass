const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const formControl = input.parentElement;
// const small = formControl.querySelector('small');

// Show error outline
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check required fields 
const checkRequired = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${input.placeholder} cannot be empty`);
    } else {
      showSuccess(input);
    }
  })
}

// Check input length
const checkLength = (input, min, max) => {
  if (input.value.trim() === '') {
    showError(input, `${input.placeholder} cannot be empty`)
  } else if (input.value.length < min){
    showError(input, `${input.placeholder} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${input.placeholder} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Check email is valid
const checkEmail = (input) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else if (input.value.trim() === '') {
      showError(input, `${input.placeholder} cannot be empty`)
    } else {
      showError(input, 'Looks like this is not an email');
    }
}

// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  checkRequired([fname, lname, email, password]);
  checkLength(fname, 3, 10);
  checkLength(lname, 3, 10);
  checkLength(password, 6, 20);
  checkEmail(email);
})