

let birthDate = document.getElementById("birthDate")
let currentDate = document.getElementById("currentDate")
let btn = document.querySelector(".btn")
let output = document.getElementById("output");

btn.addEventListener('click', () => {
  if(birthDate.value == "" || currentDate.value == ""){
    output.innerText = "Please select first"
  } else {
    calculateAgeDifference(birthDate.value, currentDate.value)
  }
})

function calculateAgeDifference(start, end){
  let dobYear = parseInt(start.substring(0,4),10)
  let dobMonth = parseInt(start.substring(5,7),10)
  let dobDay = parseInt(start.substring(8,10),10)
  let currYear = parseInt(end.substring(0,4),10)
  let currMonth = parseInt(end.substring(5,7),10)
  let currDay = parseInt(end.substring(8,10),10)

  // diff year
  let diffYear = currYear - dobYear;
  // diff month
  let diffMonth;
  if(currMonth >= dobMonth){
    diffMonth = currMonth - dobMonth
  } else {
    diffYear--;
    diffMonth = 12 + currMonth - dobMonth;
  }
  // diff days
  let diffDay;
  if (currDay >= dobDay) {
    diffDay = currDay - dobDay;
  } else {
    diffMonth--;
    let noOfDaysInDOB = daysInMonth(dobMonth, dobYear);
    diffDay = noOfDaysInDOB + currDay - dobDay;
  }
  output.innerHTML = `${diffYear} Years ${diffMonth} Months ${diffDay} Days`
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}