function store(){ //stores items in the localStorage
  var name = document.getElementById('inputName').value;
  var email = document.getElementById('inputEmail').value;
  var phone = document.getElementById('inputPhone').value;
  var checkbox = document.getElementById('gridCheck').value;
  var linkedin = document.getElementById('inputLinkedin').value;
  var github = document.getElementById('inputGithub').value;
  var teamName = document.getElementById('inputTeamName').value;
  var institution = document.getElementById('inputInstitution').value;
  var graduation = document.getElementById('inputGraduation').value;
  var key = document.getElementById('inputName').value;

  var dataPages = {
      name: name,
      email: email,
      phone: phone,
      checkbox: checkbox,
      linkedin: linkedin,
      github: github,
      teamName: teamName,
      institution: institution,
      graduation: graduation,
  }

  window.localStorage.setItem(key, JSON.stringify(dataPages));
}
