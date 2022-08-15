var dataPages;
var key;

function store(dataPages){ //stores items in the localStorage
  var namee = document.getElementById('inputName').value;
  var nickname = document.getElementById('inputNickname').value;
  var email = document.getElementById('inputEmail').value;
  var phone = document.getElementById('inputPhone').value;
  var day = document.getElementById('selectDay').value;
  // var month = document.getElementById('selectMonth').value;
  // var year = document.getElementById('selectYear').value;
  // var age = document.getElementById('inputAge').value;
  var checkbox = document.getElementById('gridCheck').value;
  var linkedin = document.getElementById('inputLinkedin').value;
  var github = document.getElementById('inputGithub').value;
  var certificates = document.getElementById('inputCertificates').value;
  var teamName = document.getElementById('inputTeamName').value;
  var institution = document.getElementById('inputInstitution').value;
  var graduation = document.getElementById('inputGraduation').value;
  key = "phoenix";
  
  dataPages = {
      name: namee,
      nickname: nickname,
      email: email,
      phone: phone,
      // birthday: [day, month, year],  não funciona
      // age: age,
      checkbox: checkbox,
      linkedin: linkedin,
      github: github,
      certificates: certificates,
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

// ? Information Persistence

function loadStorageName(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.name;
  console.log(localStorage.name);

  if (inputField !== null) tag.value = localStorage.name;
}

function loadStorageNickname(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.nickname;
  console.log(localStorage.nickname);

  if (inputField !== null) tag.value = localStorage.nickname;
}

function loadStorageEmail(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.email;
  console.log(localStorage.email);

  if (inputField !== null) tag.value = localStorage.email;
}

function loadStoragePhone(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.phone;
  console.log(localStorage.phone);

  if (inputField !== null) tag.value = localStorage.phone;
}

function loadStorageCheckbox(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.checkbox;
  console.log(localStorage.checkbox);

  if (inputField.checked == 'on') tag.value = localStorage.checkbox;//null nao funciona. qual parametro usar?
}

function loadStorageLinkedin(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.linkedin;
  console.log(localStorage.linkedin);

  if (inputField !== null) tag.value = localStorage.linkedin;
}

function loadStorageGithub(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.github;
  console.log(localStorage.github);

  if (inputField !== null) tag.value = localStorage.github;
}

//certificates!!!

function loadStorageTeamName(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.teamName;
  console.log(localStorage.teamName);

  if (inputField !== null) tag.value = localStorage.teamName;
}

function loadStorageInstitution(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.institution;
  console.log(localStorage.institution);

  if (inputField !== null) tag.value = localStorage.institution;
}


function loadStorageGraduation(tag) {
  let localStorage = getStorage();

  let inputField = localStorage.graduation;
  console.log(localStorage.graduation);

  if (inputField !== null) tag.value = localStorage.graduation;
}
