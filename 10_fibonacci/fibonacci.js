const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    let nextNum = 1
    let tmp = 1
    let firstNum = 1
    const arr = []
    for(let i = 0 ; n > i ; i++){
        tmp = nextNum
        nextNum = firstNum + nextNum
        arr.push(firstNum)
        firstNum = tmp
        
    }
    return arr[n-1]

    


};

console.log(fibonacci(-25))

// Do not edit below this line
module.exports = fibonacci;
