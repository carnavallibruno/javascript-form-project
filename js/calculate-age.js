// ? Birthday calculation
var inputDay = document.getElementById('selectDay');
var inputMonth = document.getElementById('selectMonth');
var inputYear = document.getElementById('selectYear');
var inputAge = document.getElementById('formAge');

// function newFunction() {
//     document.getElementById("selectDay").reset();
//  }

function ageValue (inputDate) {

    function ageValue(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    inputAge = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return inputAge;
}

// ? Formula Gabriel

    // var formYear = inputYear.value;
    // var formMonth = inputMonth.value;
    // var formDay = inputDay.value;

    // var inputDate = formYear + "-" + formMonth + "-" + formDay;
    // var today = new Date();
    // var birthDate = new Date(inputDate);

    // var age = today.getFullYear() - birthDate.getFullYear();
    // var m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //     age--;
    // }
    // inputAge.value = age;
    // return age;

    // if(formMonth == 2 && formDay > 29) {
    //     inputAge.value = 'Age';
    //     console.log("Data de nascimento incorreta")
    //     // return inputAge;
    // } else {
    //     var finalAge = Math.floor((today - birthdate) / 31536000000);
    //     inputAge.value = finalAge;
    // }
}

// function ageValue(dateString) {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     inputAge = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return inputAge;
// }

// function testBirthdayField (campo) {
//     if (inputDay.length > 0 && inputMonth.length > 0 && inputYear.length > 0) {
//         console.log("a função funcionou");
//     } else {
//         console.log("a função não funcionou");
//     }
// }