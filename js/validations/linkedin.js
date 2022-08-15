// ? Validation for Linkedin URL
var linkedinFieldInput = document.querySelector("#inputLinkedin");

function validateLinkedinUrl(linkedinUrl) {


  var linkedinFieldErrorMessage = document.querySelector(".linkedinFieldErrorMessage")

  var regExLinkedinUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  
  var matchLinkedinUrl = regExLinkedinUrl.test(linkedinUrl);

  if (matchLinkedinUrl) {
    linkedinFieldInput.classList.remove("invalid");
    linkedinFieldErrorMessage.classList.add("hidden");
    return true;
  }
  else {
    linkedinFieldInput.classList.add("invalid");
    linkedinFieldErrorMessage.classList.remove("hidden");
    console.log("não");
    return false;
  }
}