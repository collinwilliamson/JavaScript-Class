/* `1. (11 pts) Define a function charCount that takes a string as an argument and returns an object containing character count of letters.

```javascript
const result = charCount("Pack my box with five dozen liquor jugs.");
const aCount = result.a;
const spaceCount = result[' '];
console.log(aCount); // Should output 1
console.log(spaceCount); // Should output 7
```

P.S. Create the separate .js files for each assignment and homework. Create two branches, one for assignments and one for homework. Push your changes to the corresponding Github branches. Create pull requests to your master.
*/

function charCount(result) {
  this.result = result;
  this.aCount = result.match("a").length;
  this.spaceCount = (result.split(" ").length - 1)
}
