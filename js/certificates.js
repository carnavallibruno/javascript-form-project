var fields = 1;
var minFields = 1;
var maxFields = 5;
var moreButton = document.getElementById('more-button');
var lessButton = document.getElementById('less-button');
var newFavIcon = document.getElementById('fill-heart');
var favIcon = document.getElementById('regular-heart');

var counter = 0;

function addLines() {

    var certificateContainer = document.getElementById('form-certificates');
    var newDiv = document.createElement('div');
    newDiv.id = "remove";
    newDiv.classList.add("form-group--certificates", "d-flex", "mt-2");
    
    var newInput = document.createElement('input');
    newInput.type = "url";
    newInput.classList.add("form-control", "form-control--certificates");
    newInput.id = inputCertificates;
    newInput.placeholder = "https://www.linkedin.com/in/foo-bar-3a0560104/";
    
    var newButton = document.createElement('button');
    
    newButton.id = "fav" + counter;
    newButton.classList.add("heart-button", "d-flex");
    newButton.onclick = function() {
    favoriteCertificate();
      }
    var newEdit = document.createElement('i');
    newEdit.id = "edit";
    newEdit.classList.add("fas", "fa-edit", "me-1", "align-self-center");
    newEdit.classList.remove("d-none");
    
    var newFavIcon = document.createElement('i');
    newFavIcon.id = "fill-heart";
    newFavIcon.classList.add("d-none", "fas", "fa-heart", "me-1", "align-self-center");
    
    var newIcon = document.createElement('i');
    newIcon.id = "regular-heart";
    newIcon.classList.add("fa-regular", "fa-heart", "me-1", "align-self-center");
    
    newDiv.appendChild(newInput);
    newDiv.appendChild(newButton);
    newButton.appendChild(newEdit);
    newButton.appendChild(newFavIcon);
    newButton.appendChild(newIcon);
    lessButton.classList.remove('d-none');
  
    certificateContainer.appendChild(newDiv);
    counter ++; 
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
  if(fields < maxFields) {
    addLines();
    fields++;
  } else {
    console.log('You have reached the maximum amount of certificates');
  } 
  return fields; 
}

function removeCertificate(event) {
  event.preventDefault();
  if(fields > minFields) {
    removeLines();
    fields = fields - 1;
  } else if (fields = 1) {
    removeLessButton();
  } else {
    console.log('You cannot remove all the certificate inputs');
  }  
  return fields;
}

function changeColor() {
  newFavIcon.classList.toggle('d-none');
  favIcon.classList.toggle('d-none');
}

function favoriteCertificate(event) {
  var inputFields = document.querySelectorAll();
  changeColor();
}