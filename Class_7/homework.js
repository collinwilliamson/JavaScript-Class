
/*
1. (11 pts) With the separate prompts ask user to enter 
name, email, birth day and then password twice. 
Do simple validation for email and prompt again unless input contains @ symbol. 
If passwords do not match, ask again until they do. 
If user age is less than 13 years, display "To register one must be 13 years or older". 
Otherwise, using constructor function create an object with user details. 
Display "Successfully created account for " and show entered account information.
*/


function echo(arg) {
    const printArea = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
}

(function accountCreate() {
    let name = prompt("Enter Username.")

    if (name == null || name == "") {
        alert("Name can't be blank");
    }

    let userEmail = prompt("Please enter a valid email address.")

    if (userEmail.includes("@") !== true) {
        alert("Please enter a valid password.")
    }

    let firstpassword = prompt("Enter First Password.")
    let secondpassword = prompt("Re-confirm Password.")

    if (firstpassword !== secondpassword) {
        alert("password must be same.");
    }

    let userBirthday = prompt("Enter Your Birthday in mm/dd/yyyy format");
    const birthDay = new Date(userBirthday);
    let currentDay = new Date();
    let birthYear = birthDay.getFullYear();
    let currentYear = currentDay.getFullYear();

    const userAge = currentYear - birthYear;

    if (userAge < 13) {
        alert("You must be 13 years or older");
    }

    function userAccount(name, userEmail, firstpassword, userBirthday, userAge) {
        this.name = name;
        this.userEmail = userEmail;
        this.firstpassword = firstpassword;
        this.userBirthday = userBirthday;
        this.userAge = userAge;
    }

    echo("Your Account Information: " + userAccount)

})();