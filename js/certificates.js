var fields = 1;
var minFields = 1;
var maxFields = 5;
var moreButton = document.getElementById('more-button');
var lessButton = document.getElementById('less-button');
// var newFavIcon = document.getElementById('fill-heart');
// var favIcon = document.getElementById('regular-heart');

var counter = 0;

function addLines() {

  var certificateContainer = document.getElementById('form-certificates');
  var newDiv = document.createElement('div');
  newDiv.id = "remove";
  newDiv.classList.add("form-group--certificates", "d-flex", "mt-2");

  var newInput = document.createElement('input');
  newInput.type = "url";
  newInput.classList.add("form-control", "form-control--certificates");
  newInput.id = "inputCertificates" + counter;
  newInput.placeholder = "https://www.linkedin.com/in/foo-bar-3a0560104/";

  var newButton = document.createElement('button');

  newButton.id = "remove" + counter;
  newButton.type = "button";
  newButton.classList.add("d-flex", "align-items-center", "certificate-buttons");
  newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle icone-delete" style="color: black; fill: white; opacity: 0.75;" onclick="removeCertificate(event)"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 icone-edit margin-edit-icon" style="color: black; fill: white;  opacity: 0.75;" onclick=""><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icone-heart" style="color: black; fill: white; opacity: 0.75;" onclick="changeColor(this)"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  

  // var newFav = document.createElement('i');
  // newFav.innerHTML = '<i class="icone-heart" style="fill: white;" data-feather="heart" onclick="changeColor(this)"></i>';
  
 
  // newFav.id = "heart";
  // newFav.classList.add("icone-heart");
  // newFav.dataFeather = "heart";
  // newFav.classList.remove("d-none");
  // newFav.innerHTML = '<i class="icone-heart" style="fill: white;" data-feather="heart" onclick="changeColor(this)"></i>';


  // var newFavIcon = document.createElement('i');
  // newFavIcon.id = "fill-heart";
  // newFavIcon.classList.add("d-none", "fas", "fa-heart", "me-1", "align-self-center");

  // var newIcon = document.createElement('i');
  // newIcon.id = "regular-heart";
  // newIcon.classList.add("fa-regular", "fa-heart", "me-1", "align-self-center");

  newDiv.appendChild(newInput);
  // newButton.appendChild(newFav);
  newDiv.appendChild(newButton);
  // newButton.appendChild(newFavIcon);
  // newButton.appendChild(newIcon);

  certificateContainer.appendChild(newDiv);
  counter++;
}


function removeLines() {
  var newLine = document.getElementById('remove');
  newLine.outerHTML = '';
}

function removeLessButton() {
  lessButton.classList.add('d-none');
}

function addCertificate(event) {
  event.preventDefault();
  if (fields < maxFields) {
    addLines();
    fields++;
  } else {
    console.log('You have reached the maximum amount of certificates');
  }
  return fields;
}

function removeCertificate(event) {
  event.preventDefault();
  var teste = event.target.parentNode;
  var teste1 = teste.parentNode; //svg
  var teste2 = teste1.parentNode; //button
  var teste3 = teste2.previousElementSibling; //input
  console.log(teste);
  console.log(teste1);
  console.log(teste2);
  console.log(teste3);
  if (fields > minFields) {
    // teste2.classList.add("d-none");
    // teste2.style.transition = "2s";
    teste2.remove();
    fields = fields - 1;
  } else if (fields = 1) {
    removeLessButton();
  } else {
    console.log('You cannot remove all the certificate inputs');
  }
  return fields;
}

function changeColor(event) {
  heartIconState = event.getAttribute('style');
  console.log(event)
  if (heartIconState == 'color: black; fill: white; opacity: 0.75;') {
    event.style = 'color: #074EE8; fill: #074EE8; opacity: 1.0;';
    console.log("favoritado")
  } else {
    event.style = 'color: black; fill: white; opacity: 0.75;';
    console.log("desfavoritado")
  }
}


// function changeColor() {
//   console.log(heartIcon);
//   var heartIconState = heartIcon.style.fill = 'white';

//   if (heartIconState) {
//         heartIcon.style.fill = '#074EE8';
//   } else {
//         heartIcon.style.fill = '#FFFFFF';
//   }
// }

// function favoriteCertificate(icon) {
//   icon.changeColor();
// }