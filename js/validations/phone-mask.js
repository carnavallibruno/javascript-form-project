// ? Validation for number elements
function validateNumber(number) {
  var phoneFieldInput = document.querySelector("#inputPhone");

  var phoneFieldErrorMessage = document.querySelector(".phoneFieldErrorMessage")

  var regExNumber = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
  var matchNumber = regExNumber.test(number);

  if (matchNumber) {
    phoneFieldInput.classList.remove("invalid");
    phoneFieldErrorMessage.classList.add("hidden");
    console.log(number);
    return true;
  }
  else {
    phoneFieldInput.classList.add("invalid");
    phoneFieldErrorMessage.classList.remove("hidden");
    return false;
  }
}

// ? Phone syntax generator
function phoneMask(phone) {
  var currentPhoneInput = phone;
  var isPhone = phone.length = 11;

  var maskedNumber;
  
  if(isPhone) {
      var firstPart = currentPhoneInput.slice(0,2);
      var secondPart = currentPhoneInput.slice(2,7);
      var thirdPart = currentPhoneInput.slice(7,11);
      
      maskedNumber = "(" + firstPart + ") " + secondPart + "-" + thirdPart;

  } else {
      console.log('O seu número não é valido!')
  }

  inputPhone.value = maskedNumber;
  console.log(maskedNumber);
}