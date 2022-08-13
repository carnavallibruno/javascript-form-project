// ? Validation for Github URL
function validateGithubUrl(githubUrl) {

  var githubFieldInput = document.querySelector("#inputGithub");

  var githubFieldErrorMessage = document.querySelector(".githubFieldErrorMessage")

  var regExGithubUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  
  var matchGithubUrl = regExGithubUrl.test(githubUrl);

  if (matchGithubUrl) {
    githubFieldInput.classList.remove("invalid");
    githubFieldErrorMessage.classList.add("hidden");
    secondForm[0] = 1;
    return true;
  }
  else {
    githubFieldInput.classList.add("invalid");
    githubFieldErrorMessage.classList.remove("hidden");
    secondForm[0] = 0;
    return false;
  }
}