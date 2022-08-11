function phoneMask(phone) {
    var currentPhoneInput = phone;
    var isPhone = phone.length = 11;

    var maskedNumber;
    
    if(isPhone) {
        var firstPart = currentPhoneInput.slice(0,2);
        var secondPart = currentPhoneInput.slice(2,7);
        var thirdPart = currentPhoneInput.slice(7,11);
        
        maskedNumber = "(" + firstPart + ") " + secondPart + "-" + thirdPart;

    } else {
        console.log('O seu número não é valido!')
    }

    inputPhone.value = maskedNumber;
    console.log(maskedNumber);
}