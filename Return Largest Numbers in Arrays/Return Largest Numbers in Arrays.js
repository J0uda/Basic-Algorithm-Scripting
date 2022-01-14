// Solution 1
function largestArray(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0]
        for (let j = 0; i < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j]
            }
        }
        result[i] = largestNumber
    }
    return result
}

largestArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // result = [27, 5, 39, 1001]

// Solution 2 
function largestArray(arr) {
    return arr.map((el) => {
        return el.reduce(function (prev, current) {
            return current > prev ? current : prev
        })
    })
}

largestArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // result = [27, 5, 39, 1001]


