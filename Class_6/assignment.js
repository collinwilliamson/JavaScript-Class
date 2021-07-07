/*

function max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
*/

function max(a, b) {
    return a > b ? a : b;
}




function clearDups(inpArray) {
    const cleanedDupeArray = [];
    for (let i = 0; i < 100; i++) {
        if (inpArray[i] === inpArray[i + 1]) {
            continue;
        }
        cleanedDupeArray.push(inpArray[i]);
    } 
    return cleanedDupeArray;
}

const inpArray = [1, 2, 2, 3, 4, 2, 2, 4];
const undupArray = clearDups(inpArray);
console.log(undupArray); // Should output Array [1, 2, 3, 4, 2, 4]