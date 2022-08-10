var socialButton = document.querySelector("#nav-button-social");

socialButton.addEventListener("click", (event) => {
  event.preventDefault();

  alert("working")
  
});

// ? Checkbox validation
var checkButton = document.querySelector("#gridCheck");
checkButton.addEventListener("change", validateTermsAndPrivacy);