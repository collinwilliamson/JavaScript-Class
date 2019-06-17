/* eslint-disable no-unused-vars */

function echo(arg) {
  const printArea = document.getElementById("main");
  const p = document.createElement("p");
  p.textContent = arg;
  printArea.appendChild(p);
} 



let sign = prompt("What's your birthday?");

let today = new Date();


let date2 = new Date(today);
let date1 = new Date(sign);
let timeDiff = Math.abs(date2 - date1);
let dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24) - 1);

if (sign != null) {
  alert(
  "Hello! You are " + dayDifference + " days old.");
}