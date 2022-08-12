// ? Validation for Linkedin URL
function validateLinkedinUrl(linkedinUrl) {

  var linkedinFieldInput = document.querySelector("#inputLinkedin");

  var linkedinFieldErrorMessage = document.querySelector(".linkedinFieldErrorMessage")

  var regExLinkedinUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  
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