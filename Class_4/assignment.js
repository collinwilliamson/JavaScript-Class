/* eslint-disable no-unused-vars */

function echo(arg) {
    const printArea = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
}

for (let i=0; i<=100; i++){
if (i % 15 == 0) {
    echo("FizzBuzz");
} else if (i % 3 == 0) {
    echo("Fizz");
} else if (i % 5 == 0) {
    echo("Buzz");
} else {
    echo(i);
}
}