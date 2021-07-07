/* eslint-disable no-unused-vars */

function echo(arg) {
  const printArea = document.getElementById("main");
  const p = document.createElement("p");
  p.textContent = arg;
  printArea.appendChild(p);
}

/*
1. (11 pts) With the separate prompts ask user to enter 
name, email, birth day and then password twice. 
Do simple validation for email and prompt again unless input contains @ symbol. 
If passwords do not match, ask again until they do. 
If user age is less than 13 years, display "To register one must be 13 years or older". 
Otherwise, using constructor function create an object with user details. 
Display "Successfully created account for " and show entered account information.
*/

