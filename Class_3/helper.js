/* eslint-disable no-unused-vars */

function echo(arg) {
  const printArea = document.getElementById("main");
  const p = document.createElement("p");
  p.textContent = arg;
  printArea.appendChild(p);
} 

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
"September", "October", "November", "December"]

let answer = prompt ("Please Enter A Number");

const monthNumber = monthNames[answer - 1];

alert ("The Month is " + monthNumber);


