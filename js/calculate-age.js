// ? Birthday calculation
var inputDay = document.querySelector('#selectDay');
var inputMonth = document.querySelector('#selectMonth');
var inputYear = document.querySelector('#selectYear');
var inputAge = document.querySelector('#formAge');

// // ? Test field fill (IN DEVELOPMENT)
// function testBirthdayField () {
//     if (inputDay.textContent != 'Day' || inputMonth.textContent != 'Month' || inputYear.textContent != 'Year') {
//         inputAge.textContent = '';
//         console.log("caiu no if");
//     } else {
//         inputAge.value = null;
//         console.log("a função não funcionou");
//     }
// }


function ageValue (inputDate) {
    
    var formYear = inputYear.value;
    var formMonth = inputMonth.value;
    var formDay = inputDay.value;

    if(formMonth == 2 && formDay > 29) {
        inputAge.value = 'Age';
        console.log("Data de nascimento incorreta")
        // return inputAge;
    } else {
        var today = new Date();
        var birthDate = new Date(inputDate);
        var inputDate = formYear + "-" + formMonth + "-" + formDay;
        var finalAge = Math.floor((today - birthDate) / 31536000000);
        inputAge.value = finalAge;
        firstForm[2] = 1;
    }
}





