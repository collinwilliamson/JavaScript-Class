/* eslint-disable no-unused-vars */

function echo(arg) {
    const printArea = document.getElementById("main");
    const p = document.createElement("p");
    p.textContent = arg;
    printArea.appendChild(p);
}

let word = prompt("Please enter your word.")

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