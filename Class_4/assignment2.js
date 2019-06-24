/* eslint-disable no-unused-vars */

function echo(arg) {
  const printArea = document.getElementById("main");
  const p = document.createElement("p");
  p.textContent = arg;
  printArea.appendChild(p);
}

function isPrime(n) {
  if (n<2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i <= 100; i++) {
  echo(i + " " + isPrime(i));
}
