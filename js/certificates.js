var fields = 1;
var minFields = 1;
var maxFields = 5;
var moreButton = document.getElementById('more-button');
var lessButton = document.getElementById('less-button');
var favIcon = document.getElementById('heart-button');


function addLines() {
    var certificateContainer = document.getElementById('form-certificates');

    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<div id="remove" class="form-group--certificates d-flex"><input type="url" class="form-control form-control--certificates mt-2" id="inputCertificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"><button type="button" class="heart-button mt-2"><i class="fa-regular fa-heart heart-button-margin"></i></button></div>';


    lessButton.classList.remove('d-none');
    certificateContainer.appendChild(newDiv);
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

function favoriteCertificate(event) {

}