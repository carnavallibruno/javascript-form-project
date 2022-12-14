// ? Validation for the Team Name
var teamNameFieldInput = document.querySelector("#inputTeamName");

function validateTeamName(teamName) {
  
  var teamNameFieldErrorMessage = document.querySelector(".teamNameFieldErrorMessage");

  var regExTeamName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
  var matchTeamName = regExTeamName.test(teamName);


  if (matchTeamName) {
    teamNameFieldInput.classList.remove("invalid");
    teamNameFieldErrorMessage.classList.add("hidden");
    thirdForm[0] = 1;
    return true;
  }
  
  else {
    teamNameFieldInput.classList.add("invalid");
    teamNameFieldErrorMessage.classList.remove("hidden");
    thirdForm[0] = 0;
    return false;
  }
}