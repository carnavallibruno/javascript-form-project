// ? This file contains the functions used to create the dropdowns

// ? Function that creates the day dropdown
var dayInput = document.getElementById('selectDay');
function createDayDropdown(){
  for(var i = 1; i <= 31; i++) {
    var dayOption = document.createElement("option");
    dayOption.value = i;
    dayOption.textContent = i;
    dayInput.appendChild(dayOption);
  }
}

// ? Function that creates the months dropdown
var monthInput = document.getElementById('selectMonth');
function createMonthDropdown () {
  for (var i = 1; i <= 12; i++) {
    var monthOption = document.createElement("option");
    monthOption.value = i;
    monthOption.textContent = i;
    monthInput.appendChild(monthOption);
  }
}

// ? Function that creates the years dropdown
var yearInput = document.getElementById('selectYear');
function createYearDropdown () {
  for (var i = 2007; i >= 1950; i--) {
    var yearOption = document.createElement("option");
    yearOption.value = i;
    yearOption.textContent = i;
    yearInput.appendChild(yearOption);
  }
}

// ? Functions that calls all three dropdowns onload
function dateOfBirth () {
  createDayDropdown();
  createMonthDropdown();
  createYearDropdown();
}