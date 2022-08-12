// ? Validation for Github URL
function validateGithubUrl(githubUrl) {

  var githubFieldInput = document.querySelector("#inputGithub");

  var githubFieldErrorMessage = document.querySelector(".githubFieldErrorMessage")

  var regExGithubUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  
  var matchGithubUrl = regExGithubUrl.test(githubUrl);

  if (matchGithubUrl) {
    githubFieldInput.classList.remove("invalid");
    githubFieldErrorMessage.classList.add("hidden");
    secondForm = 1;
    return true;
  }
  else {
    githubFieldInput.classList.add("invalid");
    githubFieldErrorMessage.classList.remove("hidden");
    console.log("não");
    return false;
  }
}