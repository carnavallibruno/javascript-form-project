// ? Validation for URLs
function validateUrl(url) {
  var regExUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  
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