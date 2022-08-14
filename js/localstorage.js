var dataPages;
var key;

function store(dataPages){ //stores items in the localStorage
  var namee = document.getElementById('inputName').value;
  var email = document.getElementById('inputEmail').value;
  var phone = document.getElementById('inputPhone').value;
  var checkbox = document.getElementById('gridCheck').value;
  var linkedin = document.getElementById('inputLinkedin').value;
  var github = document.getElementById('inputGithub').value;
  var teamName = document.getElementById('inputTeamName').value;
  var institution = document.getElementById('inputInstitution').value;
  var graduation = document.getElementById('inputGraduation').value;
  key = "phoenix";
  
  dataPages = {
      name: namee,
      email: email,
      phone: phone,
      checkbox: checkbox,
      linkedin: linkedin,
      github: github,
      teamName: teamName,
      institution: institution,
      graduation: graduation,
  }

  window.localStorage.setItem('phoenix', JSON.stringify(dataPages));

}

// function saveStorage(dataPages, key){
//   window.localStorage.setItem(key, JSON.stringify(dataPages));
// }

function getStorage(){
  return JSON.parse(window.localStorage.getItem('phoenix'));

  // return dataPages
}