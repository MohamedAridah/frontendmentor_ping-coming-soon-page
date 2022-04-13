let subscribeform = document.querySelector(".subscribe");
let formInput = subscribeform.querySelector(".user-email");

subscribeform.addEventListener("submit", (e) => {
  checkValidity(e);
});

function checkValidity(e) {
  let inputValue = formInput.value.trim();

  if (inputValue == "" || inputValue == null) {
    e.preventDefault();
    setError(formInput, "Whoops! It looks like you forgot to add your email");
  } else if (!isValidEmail(inputValue)) {
    e.preventDefault();
    setError(formInput, "Please provide a valid email address");
  }
}

function setError(input, message) {
  const formControl = input.closest(".form-control");
  const small = formControl.querySelector(".error");
  small.textContent = message;
  formControl.classList.add("invalid");
}

function isValidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
