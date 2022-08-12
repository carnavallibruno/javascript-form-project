// ? Navbar buttons variables
var basicButton = document.querySelector(".nav-button-basic");
var socialButton = document.querySelector(".nav-button-social");
var certificatesButton = document.querySelector(".nav-button-certificates");

// ? Form page variables
var basicPage = document.querySelector(".first-tab");
var socialPage = document.querySelector(".second-tab");
var certificatesPage = document.querySelector(".third-tab");

// ? Next button variables
var nextBasicButton = document.querySelector(".next-button-basic");
var nextSocialButton = document.querySelector(".next-button-social");



// ? Swap page functions
function swapFirstPage () {
  basicButton.classList.add("nav-button-active");
  socialButton.classList.remove("nav-button-active");
  certificatesButton.classList.remove("nav-button-active");

  basicPage.classList.remove("d-none");
  socialPage.classList.add("d-none");
  certificatesPage.classList.add("d-none");
}

function swapSecondPage () {
  basicButton.classList.remove("nav-button-active");
  socialButton.classList.add("nav-button-active");
  certificatesButton.classList.remove("nav-button-active");

  basicPage.classList.add("d-none");
  socialPage.classList.remove("d-none");
  certificatesPage.classList.add("d-none");
}

function swapThirdPage () {
  basicButton.classList.remove("nav-button-active");
  socialButton.classList.remove("nav-button-active");
  certificatesButton.classList.add("nav-button-active");

  basicPage.classList.add("d-none");
  socialPage.classList.add("d-none");
  certificatesPage.classList.remove("d-none");
}


// // ? Swap page event listeners

// // * Page 1
// basicButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   swapFirstPage();
// });

// // * Page 2
// socialButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   swapSecondPage();
// });

// // * Page 3
// certificatesButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   swapThirdPage();
// });



// // ? Swap page event listeners (next button)

// // * Next button (Basic page)
// // nextBasicButton.addEventListener("click", (event) => {
// //   event.preventDefault();
// //   swapSecondPage();
// // });

// // * Next button (Social page)
// nextSocialButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   swapThirdPage();
// });




