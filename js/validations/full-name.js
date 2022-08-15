// ? Validation for the name
var nameFieldInput = document.querySelector("#inputName");
var nicknameFieldInput = document.querySelector('#inputNickname');
function validateFullName(name) {
  
  var nameFieldErrorMessage = document.querySelector(".nameFieldErrorMessage");

  var regExName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  var matchName = regExName.test(name);


  if (matchName) {
    nameFieldInput.classList.remove("invalid");
    nameFieldErrorMessage.classList.add("hidden");
    firstForm[0] = 1;
    return true;
  }
  
  else {
    nameFieldInput.classList.add("invalid");
    nameFieldErrorMessage.classList.remove("hidden");
    firstForm[0] = 0;
    return false;
  }
}