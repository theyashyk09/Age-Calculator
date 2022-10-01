const button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  const inputDob = document.getElementById("dob").value;

  let dob = new Date(inputDob);
  let inputDate = dob.getDate();
  let inputMonth = dob.getMonth() + 1;
  let inputYear = dob.getFullYear();

  let current = new Date();
  let currentDate = current.getDate();
  let currentMonth = current.getMonth() + 1;
  let currentYear = current.getFullYear();

  let resultYear;
  let resultMonth;
  let resultDate;

  if (current >= dob) {
    resultYear = currentYear - inputYear;

    if (currentDate >= inputDate) {
      resultDate = currentDate - inputDate;
    } else {
      currentDate = currentDate + 31;
      resultDate = currentDate - inputDate;
      currentMonth = currentMonth - 1;
    }

    if (currentMonth >= inputMonth) {
      resultMonth = currentMonth - inputMonth;
    } else {
      currentMonth = currentMonth + 12;
      resultMonth = currentMonth - inputMonth;
      resultYear = resultYear - 1;
    }

    result.style.display = "block";
    result.textContent =
      "You are " +
      resultYear +
      " Years " +
      resultMonth +
      " Months " +
      resultDate +
      " Days Old";
  } else if (currentDate < inputDate) {
    result.style.display = "block";
    result.textContent = "Hi Time Traveller, You are not born yet";
  } else {
    result.style.display = "block";
    result.textContent = "Enter valid date of birth";
  }
});
