function insertModalContent(event) {
    event.preventDefault();
    console.log('fooooooooooooi');
    addModal();
}


function addModal () {
    var finalMessage = document.getElementById("modal-body");
    var modalContent = document.createElement('div');
    var localStorage = getStorage();
    console.log(localStorage);

    finalMessage.appendChild(modalContent);

    // ? BASIC

    var basicDivider = document.createElement("hr");
    finalMessage.appendChild(basicDivider);

    var basicTitle = document.createElement("h4")
    basicTitle.style.fontWeight = "900";
    basicTitle.innerHTML = "BASIC";
    finalMessage.appendChild(basicTitle);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var basicName = document.createElement("h4")
    basicName.innerHTML = "Name: " + localStorage.name;
    finalMessage.appendChild(basicName);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var basicNickname = document.createElement("h4");
    basicNickname.innerHTML = "Nickname: " + localStorage.nickname;
    finalMessage.appendChild(basicNickname);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var basicEmail = document.createElement("h4");
    basicEmail.innerHTML = "Email: " + localStorage.email;
    finalMessage.appendChild(basicEmail);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var basicPhone = document.createElement("h4");
    basicPhone.innerHTML = "Phone: " + localStorage.phone;
    finalMessage.appendChild(basicPhone);

    
    var basicDivider = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var basicDivider = document.createElement("hr");
    finalMessage.appendChild(basicDivider);

    var basicDivider = document.createElement("hr");
    finalMessage.appendChild(basicDivider);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);



    // ? SOCIAL

    var socialTitle = document.createElement("h4");
    socialTitle.style.fontWeight = "900";
    socialTitle.innerHTML = "SOCIAL";
    finalMessage.appendChild(socialTitle);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var socialLinkedin = document.createElement("h4");
    socialLinkedin.innerHTML = 'LinkedIn: ' + localStorage.linkedin;
    finalMessage.appendChild(socialLinkedin);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);
    
    var socialGithub = document.createElement("h4");
    socialGithub.innerHTML = 'Github: ' + localStorage.github;
    finalMessage.appendChild(socialGithub);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var basicDivider = document.createElement("hr");
    finalMessage.appendChild(basicDivider);

    var basicDivider = document.createElement("hr");
    finalMessage.appendChild(basicDivider);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    // ? CERTIFICATES

    var certificatesTitle = document.createElement("h4");
    certificatesTitle.style.fontWeight = "900";
    certificatesTitle.innerHTML = "CERTIFICATES";
    finalMessage.appendChild(certificatesTitle);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var certificatesTeamName = document.createElement("h4");
    certificatesTeamName.innerHTML = 'Team Name: ' + localStorage.teamName;
    finalMessage.appendChild(certificatesTeamName);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var certificatesInstitution = document.createElement("h4");
    certificatesInstitution.innerHTML = 'Institution: ' + localStorage.institution;
    finalMessage.appendChild(certificatesInstitution);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var certificatesGraduation = document.createElement("h4");
    certificatesGraduation.innerHTML = 'Graduation: ' + localStorage.graduation;
    finalMessage.appendChild(certificatesGraduation);

    finalMessage.appendChild(breakLine);
}

function resetForm() {
    document.getElementById("first-tab").reset();
    document.getElementById("second-tab").reset();
    document.getElementById("third-tab").reset();
    localStorage.clear();
}