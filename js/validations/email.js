// ? Validation for the email
function validateEmail(email) {
  var emailFieldInput = document.querySelector('#inputEmail');

  var emailFieldErrorMessage = document.querySelector('.emailFieldErrorMessage');

  var regExEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  var matchEmail = regExEmail.test(email);

  if (matchEmail) {
    emailFieldInput.classList.remove("invalid");
    emailFieldErrorMessage.classList.add("hidden");
    firstForm[1] = 1;
    console.log(email);
    return true;
  }
  else {
    emailFieldInput.classList.add("invalid");
    emailFieldErrorMessage.classList.remove("hidden");
    firstForm[1] = 0;
    return false;
  }
}