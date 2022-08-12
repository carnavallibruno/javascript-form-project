// ? Birthday calculation
var inputDay = document.getElementById('selectDay');
var inputMonth = document.getElementById('selectMonth');
var inputYear = document.getElementById('selectYear');
var inputAge = document.getElementById('formAge');

function ageValue (inputDate) {
    
    var formYear = inputYear.value;
    var formMonth = inputMonth.value;
    var formDay = inputDay.value;

    testBirthdayField();
    if(formMonth == 2 && formDay > 29) {
        inputAge.value = 'Age';
        console.log("Data de nascimento incorreta")
        // return inputAge;
    } else {
        var today = new Date();
        var birthDate = new Date(inputDate);
        console.log(birthDate);
        var inputDate = formYear + "-" + formMonth + "-" + formDay;
        var finalAge = Math.floor((today - birthDate) / 31536000000);
        inputAge.value = finalAge;
        firstForm[2] = 1;
    }
}

// ? Test field fill (IN DEVELOPMENT)
function testBirthdayField () {
    if (inputDay.textContent != 'Day' && inputMonth.textContent != 'Month' && inputYear.textContent != 'Year') {
        inputAge.value = finalAge;
        console.log("a função funcionou");
    } else {
        inputAge.value = null;
        console.log("a função não funcionou");
    }
}