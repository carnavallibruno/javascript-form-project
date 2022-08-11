var firstForm = [0, 0, 0, 0];

// function teste () {}


// ? Validation for the name
function validateFullName(name) {
  
  var nameFieldInput = document.querySelector("#inputName");

  var nameFieldErrorMessage = document.querySelector(".nameFieldErrorMessage");

  var regExName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  var matchName = regExName.test(name);
  var nameValidator = firstForm[0];

  if (matchName) {
    nameFieldInput.classList.remove("invalid");
    nameFieldErrorMessage.classList.add("hidden");
    nameValidator = 1;
    return true;
  }
  
  else {
    nameFieldInput.classList.add("invalid");
    nameFieldErrorMessage.classList.remove("hidden");
    nameValidator = 0;
    return false;
  }
}

// function myFunc() {
//   var myBtn = document.createElement("button");
//   myBtn.innerHTML = "New Button";
//   document.body.appendChild(myBtn);
//   }

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

// ? Validation for number elements
function validateNumber(number) {
  var regExNumber = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
  var matchNumber = regExNumber.test(number);

  if (matchNumber) {
    console.log(number);
    return true;
  }
  else {
    console.log("Número incorreto");
    // Mensagem
    return false;
  }
}

// // * Checkbox validation
// var checkButton = document.querySelector("#gridCheck");
// checkButton.addEventListener("change", validateTermsAndPrivacy);





// ? Validation for URLs
function validateUrl(url) {
  var regExUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  
  var matchUrl = regExUrl.test(url);

  if (matchUrl) {
    console.log(url);
    arrayValidation.appendChild();
    return true;
  }
  else {
    console.log("não");
    return false;
  }
}

// ? Validation in case the user attempts to submit an empty field
function validateEmptyField(content) {
  if (content.length != 0) {
    console.log("campo ok")
    // arrayValidation.appendChild(1);
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

console.log()

// ? Event listeners

// // * Checkbox validation
// var checkButton = document.querySelector("#gridCheck");
// checkButton.addEventListener("change", validateTermsAndPrivacy());

// console.log(formArray);
// console.log(validatingArray);
// if(validatingArray == formArray) {
//   console.log('Todos os itens do formulario estao preenchidos');
// }