/* eslint-disable no-unused-vars */

function echo(arg) {
    const printArea = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
}

let integer1 = prompt("Please enter your first number.")

let integer2 = prompt("Please enter your")

let n = (integer1 * integer2)
function checkPalindrome(word) {
    var len = Math.floor(word.length / 2);
    for (var i = 0; i < len; i++)
      if (word[i] !== word[word.length - i - 1])
        return false;
    return true;
  }

if (checkPalindrome(word)) {
    echo("The word is a palindrome");
} else {
    echo("The word is NOT a palindrome");
}