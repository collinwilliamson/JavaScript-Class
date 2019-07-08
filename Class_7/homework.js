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

let userName = prompt("Please create a user name.");
let userEmail = prompt("Please enter a valid email address.");

let userAge = prompt("Please enter your birdday in mm-dd-yyyy format.");


function validate_form() {
    valid = true;

    if (userName == "") {
        alert("Please fill in the 'Your Name' box.");
        valid = false;
    }

    return valid;
}

let userPassword = prompt("Please create a user password.");
let userValidation = prompt("Please validate your password by entering it again.");

function match() {
    if (userPassword == userValidation) {
        return true;
    }
    else {
        alert("password must be same!");
        return false;
    }
}