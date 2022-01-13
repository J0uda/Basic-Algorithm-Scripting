// Solution 1
function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("hello");

// Solution 2
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

reverseString("hello");

// Solution 3 
function reverseString(str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0)
}

reverseString("hello")

// Solution 4 
function reverseString(str) {
    return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0)
}

reverseString(str)