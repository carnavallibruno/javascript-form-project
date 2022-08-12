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