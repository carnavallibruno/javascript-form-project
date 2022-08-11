// ? Birthday calculation
var inputDay = document.getElementById('selectDay');
var inputMonth = document.getElementById('selectMonth');
var inputYear = document.getElementById('selectYear');
var inputAge = document.getElementById('formAge');

function ageValue () {
    var formYear = inputYear.value;
    var formMonth = inputMonth.value;
    var formDay = inputDay.value;

    var inputDate = formYear + "-" + formMonth + "-" + formDay;

    var today = Date.now();
    var birthdate = new Date(inputDate);
    var finalAge = Math.floor((today - birthdate) / 31536000000);
    inputAge.value = finalAge;
}