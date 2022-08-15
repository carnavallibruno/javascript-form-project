// ? Validation for Graduation field
var graduationFieldInput = document.querySelector("#inputGraduation");

function validateGraduation(graduation) {  

  var graduationFieldErrorMessage = document.querySelector(".graduationFieldErrorMessage");

  var regExGraduation = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  var matchGraduation = regExGraduation.test(graduation);


  if (matchGraduation) {
    graduationFieldInput.classList.remove("invalid");
    graduationFieldErrorMessage.classList.add("hidden");
    thirdForm[1] = 1;
    return true;
  }
  
  else {
    graduationFieldInput.classList.add("invalid");
    graduationFieldErrorMessage.classList.remove("hidden");
    thirdForm[1] = 0;
    return false;
  }
}