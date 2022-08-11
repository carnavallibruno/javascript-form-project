// ? Functions used to create the dropdowns

// ? Function that creates the day dropdown
var dayInput = document.getElementById('selectDay');
function createDayDropdown(){
  for(var i = 01; i <= 31; i++) {
    var dayOption = document.createElement("option");
    dayOption.value = i;
    dayOption.innerHTML = i;
    dayInput.appendChild(dayOption);
  }
}

// ? Function that creates the months dropdown
var monthInput = document.getElementById('selectMonth');
function createMonthDropdown () {
  for (var i = 1; i <= 12; i++) {
    var monthOption = document.createElement("option");
    monthOption.value = i;
    monthOption.innerHTML = i;
    monthInput.appendChild(monthOption);
  }
}

// ? Function that creates the years dropdown
var yearInput = document.getElementById('selectYear');
function createYearDropdown () {
  for (var i = 1950; i <= 2007; i++) {
    var yearOption = document.createElement("option");
    yearOption.value = i;
    yearOption.innerHTML = i;
    yearInput.appendChild(yearOption);
  }
}

// ? Functions that calls all three dropdowns
function dateOfBirth () {
  createDayDropdown();
  createMonthDropdown();
  createYearDropdown();
}