
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

const months = ['Januar', 'Februar', 'Marec', 'April', 
'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober',
'November', 'December'];

//Months are always the same
(function populateMonths(){
    for(let i = 0; i < months.length; i++){
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "Januar";
})();

let previousDay;

function populateDays(month){
    //Delete all of the children of the day dropdown
    //if they do exist
    while(daySelect.firstChild){
        daySelect.removeChild(daySelect.firstChild);
    }
    //Holds the number of days in the month
    let dayNum;
    //Get the current year
    let year = yearSelect.value;

    if(month === 'Januar' || month === 'Marec' || 
    month === 'Maj' || month === 'Julij' || month === 'Avgust' 
    || month === 'Oktober' || month === 'December') {
        dayNum = 31;
    } else if(month === 'April' || month === 'Junij' 
    || month === 'September' || month === 'November') {
        dayNum = 30;
    }else{
        //Check for a leap year
        if(new Date(year, 1, 29).getMonth() === 1){
            dayNum = 29;
        }else{
            dayNum = 28;
        }
    }
    //Insert the correct days into the day <select>
    for(let i = 1; i <= dayNum; i++){
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if(previousDay){
        daySelect.value = previousDay;
        if(daySelect.value === ""){
            daySelect.value = previousDay - 1;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 2;
        }
        if(daySelect.value === ""){
            daySelect.value = previousDay - 3;
        }
    }
}

function populateYears(){
    //Get the current year as a number
    let year = new Date().getFullYear();
    //Make the previous 100 years be an option
    for(let i = 0; i < 101; i++){
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function() {
    populateDays(monthSelect.value);
}
monthSelect.onchange = function() {
    populateDays(monthSelect.value);
}
daySelect.onchange = function() {
    previousDay = daySelect.value;
}

    /*Limiter za textarea*/
    var maxAmount = 300;
    function textCounter(textField, showCountField) {
        if (textField.value.length > maxAmount) {
            textField.value = textField.value.substring(0, maxAmount);
        } else { 
            showCountField.value = maxAmount - textField.value.length;
        }
    }
	/*Nastavljanje privzetega datuma na današnji datum*/
	document.getElementById("date1").readOnly= true;
	document.getElementById("date1").valueAsDate= new Date();
	document.getElementById("date2").readOnly= true;
	document.getElementById("date2").valueAsDate= new Date();

  

