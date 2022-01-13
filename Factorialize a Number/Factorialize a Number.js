// Solution 1
function factorialize(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i
    }
    return result
}

factorialize(5); // result = 120

// Solution 2
function factorialize(num) {
    if (num === 0)
        return 1
    else return num * factorialize(num - 1)
}

factorialize(5) //  120

// Solution 3
function factorialize(num, factorial = 1) {
    if (num === 0) return factorial
    else factorialize(num - 1, factorial * num)
}

factorialize(5) // 120