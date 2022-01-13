// Solution 1
function findlongestWordLength(str) {
    let arrayOfWords = str.split(' ');
    let maxLength = 0
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > maxLength) {
            maxLength = arrayOfWords[i].length
        }
    }
    return maxLength
}
findlongestWordLength("The quick brown fox jumped over the lazy dog") // maxLength = 6

// Solution 2
function findlongestWordLength(str) {
    return str.split(' ').reduce(function (longest, word) {
        return Math.max(longest, word.length)
    }, 0)
}

findlongestWordLength("The quick brown fox jumped over the lazy dog") // maxLength = 6

// Solution 3
function findlongestWordLength(str) {
    return Math.max(...str.split(' ').map(word => word.length))
}

findlongestWordLength("The quick brown fox jumped over the lazy dog") // maxLength = 6

