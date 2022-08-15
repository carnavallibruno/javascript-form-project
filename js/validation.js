// ? Confirmation arrays for input validation per form, every time the input becomes true, the associated value goes from 0 to 1
var firstForm = [0, 0, 0, 0];
var secondForm = [0];
var thirdForm = [0, 0, 0];


function toFirstPage(event) {
  event.preventDefault();
  if (!firstForm.includes(0)) {
    swapFirstPage();
  } else {
    return;
  }
}

function toSecondPage(event) {
  event.preventDefault();
  if (!firstForm.includes(0)) {
    document.querySelector(".buttonPageOneFieldErrorMessage").classList.add("hidden");
    swapSecondPage();
  } else {
    document.querySelector(".buttonPageOneFieldErrorMessage").classList.remove("hidden");
    return;
  }
}

function toThirdPage(event) {
  event.preventDefault();
  if (!firstForm.includes(0) && !secondForm.includes(0)) {
    document.querySelector(".buttonPageTwoFieldErrorMessage").classList.add("hidden");
    swapThirdPage();
  } else {
    document.querySelector(".buttonPageTwoFieldErrorMessage").classList.remove("hidden");
    return;
  }
}