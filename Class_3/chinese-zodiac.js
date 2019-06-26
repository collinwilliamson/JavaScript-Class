function echo(arg) {
    const printArea = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
  } 
  
let year = prompt("What year where you born?");

let zodiacSign = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"]

echo("You were born the year of the" + " " + zodiacSign[Math.round(year % 12)]); 