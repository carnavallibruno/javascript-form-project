// ? Validation for URLs
function validateUrl(url) {
  var regExUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  
  var matchUrl = regExUrl.test(url);

  if (matchUrl) {
    console.log(url);
    return true;
  }
  else {
    console.log("não");
    return false;
  }
}

function addLines() {
    var certificateContainer = document.getElementById('form-certificates');

    var newDiv = document.createElement('div');
    newDiv.innerHTML = '<input type="url" class="form-control" id="inputCertificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"><div class="form-group--favorite"><i class="fa-regular fa-heart"></i></div>';

    certificateContainer.appendChild(newDiv);
}

function addCertificate(event) {
    event.preventDefault();
    addLines();

    var teste = document.getElementById('nome');
    console.log(teste);
    

}