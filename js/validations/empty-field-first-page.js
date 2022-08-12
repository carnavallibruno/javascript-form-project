// ? Validation in case the user attempts to submit an empty field in the FIRST page
function validateEmptyFieldPageOne(content) {
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