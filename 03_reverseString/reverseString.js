const reverseString = function(inputTxt) {
    let string = [];
    for( let i in inputTxt)
    {
        string.push(inputTxt[i]);
    }
    return string.reverse().join("")
};

console.log(reverseString("hey"))
// Do not edit below this line
module.exports = reverseString;
