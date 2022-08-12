function store(){ //stores items in the localStorage
  var name = document.getElementById('inputName').value;
  var email = document.getElementById('inputEmail').value;
  var phone = document.getElementById('inputPhone').value;
  var checkbox = document.getElementById('gridCheck').value;
  var linkedin = document.getElementById('inputLinkedin').value;
  var github = document.getElementById('inputGithub').value;
  var teamName = document.getElementById('inputTeamName').value;
  var key = document.getElementById('inputName').value; //gets the key from the user

  const basic = {
      name: name,
      email: email,
      phone: phone,
      checkbox: checkbox,
      linkedin: linkedin,
      github: github,

  }

  window.localStorage.setItem(key, JSON.stringify(basic));  
  //converting object to string
}

document.getElementById('inputName').innerHTML = localStorage.getItem("name");
document.getElementById('inputEmail').innerHTML = localStorage.getItem("email");