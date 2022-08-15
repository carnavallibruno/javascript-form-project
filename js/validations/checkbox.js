// ? Validation for the checkbox of terms and privacy
var checkboxVariable = document.querySelector("#gridCheck");

function validateCheckbox(checkbox) {
    if (checkbox = checkboxVariable.checked) {
        console.log('foi!');
        firstForm[3] = 1;
        return true;
    } else {
        alert("You must agree to the terms of service.");
        firstForm[3] = 0;
        return false;
    }
}