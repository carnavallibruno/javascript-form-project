// ? Validation for the name checkboxes
function validateFullName(name) {
  if (typeof name === 'string') {
    return true;
  }
  else {
    return false;
  }
}

// ? Validation in case the user attempts to submit an empty field
function validateEmptyField(content) {
  if (content.length == 0) {
    return false;
  }
  else {
    return true;
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