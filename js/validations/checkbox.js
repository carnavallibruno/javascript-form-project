// // ? Validation for the checkbox of terms and privacy
// function validateTermsAndPrivacy() {
//     var checkbox = document.querySelector("#gridCheck");
//     var checked = checkbox.checked;
//     if (!checked) {
//         checked = false;
//         console.log(checked);
//     }
//     else {
//         checked = true;
//         console.log(checked);
//     //   return alert("You must agree to the terms of service.")
//     // console.log(checkbox.checked)
//     }
// }

// //   ? Event listeners

// // * Checkbox validation
// var checkButton = document.querySelector("#gridCheck");
// checkButton.addEventListener("change", validateTermsAndPrivacy());



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