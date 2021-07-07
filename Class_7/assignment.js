/* eslint-disable no-unused-vars */

function echo(arg) {
    const printArea = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
}

const userYear = prompt("What year where you born?");

let year = Number(userYear);

let year1 = year + 12;

let year2 = year + 24;

let zodiacNum = (year % 12);

function myOutput(sign) {
    echo("Year of the " + sign + " is " + year1 + " and " + year2);
}

switch (zodiacNum) {
    case 0:
        myOutput("Rooster")
        break;
    case 1:
        myOutput("Dog")
        break;
    case 2:
        myOutput("Pig")
        break;
    case 3:
        myOutput("Rooster")
        break;
    case 4:
        myOutput("Ox")
        break;
    case 5:
        myOutput("Tiger")
        break;
    case 6:
        myOutput("Rabbit")
        break;
    case 7:
        myOutput("Dragon")
        break;
    case 8:
        myOutput("Snake")
        break;
    case 9:
        myOutput("Horse")
        break;
    case 10:
        myOutput("Goat")
        break;
    case 11:
        myOutput("Monkey")
        break;
    default:
        echo("Error")
        break;
}