// Solution 1 
function confirmEnding(str, target) {
    let index = str.lastIndexOf(target);
    let endingString = str.substring(index, str.length);
    return endingString === target ? true : false
}

confirmEnding("Bastian", "n");

// Solution 2
function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n") // true