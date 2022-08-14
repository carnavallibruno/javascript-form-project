// finalMessage.innerHTML = "<hr>";
function insertModalContent(event) {
    // event.preventDefault();
    console.log('fooooooooooooi');
    addModal();
}


function addModal () {
    var finalMessage = document.getElementById("modal-body");
    var modalContent = document.createElement('div');
    var localStorage = getStorage();
    console.log(localStorage);

    finalMessage.appendChild(modalContent);

    var basicDivider = document.createElement("hr");
    finalMessage.appendChild(basicDivider);

    var basicTitle = document.createElement("h4")
    basicTitle.innerHTML = "BASIC";
    finalMessage.appendChild(basicTitle);

    var breakLine = document.createElement("br");
    finalMessage.appendChild(breakLine);

    var basicName = document.createElement("h4")
    basicName.innerHTML = "Name: " + localStorage.name;
    finalMessage.appendChild(basicName);

    var basicNickname = document.createElement("h4");
    basicNickname.innerHTML = "Nickname: " + localStorage.nickname;
    finalMessage.appendChild(basicNickname);

    var basicEmail = document.createElement("h4");
    basicEmail.innerHTML = "Email: " + localStorage.email;
    finalMessage.appendChild(basicEmail);

    var basicPhone = document.createElement("h4");
    basicPhone.innerHTML = "Phone: " + localStorage.phone;
    finalMessage.appendChild(basicPhone);
    
    // var birthdayInfo = document.createElement("h4");
    // birthdayInfo.innerHTML = "Age: " + localStorage.;
    // finalMessage.appendChild(birthdayInfo);

    finalMessage.appendChild(breakLine);

    var basicDivider = document.createElement("hr");
    finalMessage.appendChild(basicDivider);

    var socialTitle = document.createElement("h4");
    socialTitle.innerHTML = "SOCIAL";
    finalMessage.appendChild(socialTitle);

    finalMessage.appendChild(breakLine);

    var socialLinkedin = document.createElement("h4");
    socialLinkedin.innerHTML = 'LinkedIn: ' + localStorage.linkedin;
    finalMessage.appendChild(socialLinkedin);
    
    var socialGithub = document.createElement("h4");
    socialGithub.innerHTML = 'Github: ' + localStorage.github;
    finalMessage.appendChild(socialGithub);
    
    finalMessage.appendChild(basicDivider);

    finalMessage.appendChild(breakLine);

    var certificatesTitle = document.createElement("h4");
    certificatesTitle.innerHTML = "CERTIFICATES";
    finalMessage.appendChild(certificatesTitle);

    finalMessage.appendChild(breakLine);

    var certificatesCertificates = document.createElement("h4");
    certificatesCertificates.innerHTML = 'Certificados: ' + inputCertificates.value;
    // + inputCertificates0.value + '<br>' + inputCertificates1.value + '<br>' + inputCertificates2.value + '<br>' + inputCertificates3.value;
    // finalMessage.appendChild(certificatesCertificates);

    var certificatesTeamName = document.createElement("h4");
    certificatesTeamName.innerHTML = 'Team Name: ' + localStorage.teamName;
    finalMessage.appendChild(certificatesTeamName);

    var certificatesInstitution = document.createElement("h4");
    certificatesInstitution.innerHTML = 'Institution: ' + localStorage.institution;
    finalMessage.appendChild(certificatesInstitution);

    var certificatesGraduation = document.createElement("h4");
    certificatesGraduation.innerHTML = 'Graduation: ' + localStorage.graduation;
    finalMessage.appendChild(certificatesGraduation);

    finalMessage.appendChild(breakLine);
}