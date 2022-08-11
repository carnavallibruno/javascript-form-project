// var arrayValidation = [{id: name, status: false}, {id: email, status: false}, {id: birthday, status: false}, {id: checkbox, status: false}];

// ? Validation for the name
function validateFullName(name) {
  var regExName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  var matchName = regExName.test(name);

  if (matchName) {
    console.log("nome correto");
    arrayValidation[0].push({status: true});
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

// ? Event listeners

// * Checkbox validation
var checkButton = document.querySelector("#gridCheck");
checkButton.addEventListener("change", validateTermsAndPrivacy);


// var allTrue = arrayValidation.every(obj => obj.status === true)
// if(allTrue) {
//   console.log('Todos os itens do formulario estao preenchidos');
// }