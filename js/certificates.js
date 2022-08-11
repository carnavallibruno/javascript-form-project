var fields = 1;
var maxFields = 5;
var moreButton = document.getElementById('more-button');
console.log(moreButton);


function addLines() {
    var certificateContainer = document.getElementById('form-certificates');

    var newDiv = document.createElement('div');
    newDiv.classList.add('newLine');
    newDiv.innerHTML = '<div class="form-group--certificates d-flex"><input type="url" class="form-control form-control--certificates mt-2" id="inputCertificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"><button type="button" class="heart-button mt-2"><i class="fa-regular fa-heart heart-button-margin"></i></button></div>';

    certificateContainer.appendChild(newDiv);
}

function removeLines() {
  var newLine = document.getElementById('newLine');

  var newDiv = document.createElement('div');
  newDiv.classList.add('newLine');
  newDiv.innerHTML = '<div class="form-group--certificates d-flex"><input type="url" class="form-control form-control--certificates mt-2" id="inputCertificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"><button type="button" class="heart-button mt-2"><i class="fa-regular fa-heart heart-button-margin"></i></button></div>';

  certificateContainer.appendChild(newDiv);
}

function addCertificate(event) {
    event.preventDefault();
    if(fields < maxFields) {
      addLines();
      fields++;
    } else {
      console.log('You have reached the maximum amount of certificates');
    }  
}

function removeCertificate(event) {
  event.preventDefault();
  if(fields < maxFields) {
    addLines();
    fields++;
  } else {
    console.log('You have reached the maximum amount of certificates');
  }  
}