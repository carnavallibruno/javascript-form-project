// ? Validation for the name
function validateFullName(name) {
  var regExName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  var matchName = regExName.test(name);

  if (matchName) {
    console.log("nome correto");
    return true;
  }
  else {
    console.log("Nome incorreto");
    return false;
  }
}


// ? Validation for the email
function validateEmail(email) {
  var regExEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  var matchEmail = regExEmail.test(email);

  if (matchEmail) {
    console.log(email);
    return true;
  }
  else {
    console.log("Email incorreto");
  }
}

// ? Validation
// ? Validation in case the user attempts to submit an empty field
function validateEmptyField(content) {
  if (content.length != 0) {
    console.log("campo ok")
    return true;
  }
  else {
    console.log("O campo está vazio")
    return false;
  }
}

// ? Validation for the checkbox of terms and privacy
function validateTermsAndPrivacy() {
  var checkbox = document.querySelector("#gridCheck");
  if (checkbox.checked) {
    return
  }
  else {
    return alert("You must agree to the terms of service.")
  }
}

function arrayValidation() {
  var array = [];
  array.appendChild(validateFullName());
}




// ? Event listeners

// * Checkbox validation
var checkButton = document.querySelector("#gridCheck");
checkButton.addEventListener("change", validateTermsAndPrivacy);