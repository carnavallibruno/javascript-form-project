// ? Validation for Institution field
var institutionFieldInput = document.querySelector("#inputInstitution");

function validateInstitutionName(institution) {  

  var institutionFieldErrorMessage = document.querySelector(".institutionFieldErrorMessage");

  var regExInstitution = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  var matchInstitution = regExInstitution.test(institution);


  if (matchInstitution) {
    institutionFieldInput.classList.remove("invalid");
    institutionFieldErrorMessage.classList.add("hidden");
    thirdForm[2] = 1;
    return true;
  }
  
  else {
    institutionFieldInput.classList.add("invalid");
    institutionFieldErrorMessage.classList.remove("hidden");
    thirdForm[2] = 0;
    return false;
  }
}