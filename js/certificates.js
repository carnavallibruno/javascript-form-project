var fields = 1;
var minFields = 1;
var maxFields = 6;
var moreButton = document.getElementById('more-button');
var lessButton = document.getElementById('less-button');
var inputCertificates = document.querySelector('#inputCertificates');

var newInput;

var counter = 1;
var arrayCertificates = [];
var arrayReposition = [];

function addLines() {

  var certificateContainer = document.getElementById('form-certificates');
  var newDiv = document.createElement('div');
  newDiv.id = "new" + counter;
  newDiv.classList.add("form-group--certificates", "d-flex", "mt-2", "inputOrder");

  createCertificateInput();
  // createCertificateButton();

  newDiv.appendChild(createCertificateInput());
  // newDiv.appendChild(createCertificateButton());

  var newButton = document.createElement('button');

  newButton.id = "remove" + counter;
  newButton.disabled = true;
  newButton.type = "button";
  newButton.classList.add("d-flex", "align-items-center", "certificate-buttons");
  newButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle icone-delete" style="color: black; fill: white; opacity: 0.75;" onclick="removeCertificate(event)"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 icone-edit margin-edit-icon" style="color: black; fill: white;  opacity: 0.75;" onclick="editLines(event)"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart icone-heart" style="color: black; fill: white; opacity: 0.75;" onclick="changeColor(this)"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
  newDiv.appendChild(newButton);


  certificateContainer.appendChild(newDiv);
  counter++;


  arrayCertificates.push(inputCertificates.value);

  console.log(arrayCertificates);
  inputCertificates.value = '';
}

function createCertificateInput() {
  newInput = document.createElement('input');
  newInput.disabled = true;
  newInput.type = "url";
  newInput.classList.add("form-control", "form-control--certificates");
  newInput.id = "inputCertificates" + counter;
  newInput.placeholder = "https://www.linkedin.com/in/foo-bar-3a0560104/";
  newInput.value = inputCertificates.value;
  newInput.onchange = store();

  return newInput;
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

function editLines(event) {
  event.preventDefault();
  console.log("entrou na função");
  return newInput.disabled = false;
}


function removeCertificate(event) {
  event.preventDefault();
  var teste = event.target.parentNode; //svg
  var teste1 = teste.parentNode; //button
  var teste2 = teste1.parentNode; //input
  if (fields > minFields) {
    teste2.remove();
    fields = fields - 1;
  } else if (fields == 1) {
  } else {
    console.log('You cannot remove all the certificate inputs');
  }
  return fields;
}

function changeColor(event) {
  heartIconState = event.getAttribute('style');
  console.log("deu certo!");
  if (heartIconState == 'color: black; fill: white; opacity: 0.75;') {
    event.style = 'color: #074EE8; fill: #074EE8; opacity: 1.0;';
    // arrayReposition.push(certificate);
  } else {
    event.style = 'color: black; fill: white; opacity: 0.75;';
  }
}

// arrayCertificates.pop(favorited element)
// arrayResposition.push(favorited element)
// arrayCertificates.push(favorited element ...arrayCertificates)