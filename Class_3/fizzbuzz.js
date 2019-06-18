/* eslint-disable no-unused-vars */

function echo(arg) {
    const printArea = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
  } 


  let answer = prompt("Please Enter A Number");


if (answer % 15 == 0) {
    alert ("FizzBuzz");
} else if (answer % 3 == 0) {
    alert ("Buzz");
} else if (answer % 5 == 0) {
    alert ("Fizz");
} else {
    alert (answer);
}