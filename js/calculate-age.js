// ? Birthday calculation
var inputDay = document.querySelector('#selectDay');
var inputMonth = document.querySelector('#selectMonth');
var inputYear = document.querySelector('#selectYear');
var inputAge = document.querySelector('#formAge');

function ageValue (inputDate) {
    
    var formYear = inputYear.value;
    var formMonth = inputMonth.value;
    var formDay = inputDay.value;
    
    if(formDay == 0 || formMonth == 0 || formYear == 0) {
        inputAge.value = '';
        console.log("Data de nascimento incorreta");
    }
    else {
        
        if(formMonth == 2 && formDay > 29) {
            inputAge.value = '';
            return;
        }
        if((formMonth == 4 || formMonth == 6 || formMonth == 9 || formMonth == 11) && formDay > 30) {
            inputAge.value = '';
            return;
        }
        
        else {
            var today = new Date();
            var birthDate = new Date(inputDate);
            var inputDate = formYear + "-" + formMonth + "-" + formDay;
            var finalAge = Math.floor((today - birthDate) / 31536000000);
            inputAge.value = finalAge;
            firstForm[2] = 1;
            return finalAge;
        }
    }
}