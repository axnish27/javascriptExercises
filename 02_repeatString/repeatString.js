const repeatString = function(string,num) {
    if (num < 0) return "ERROR";
    let strings = "";
    for(let i = 0;i < num; i++)
    {
        strings += string;
    }
    return strings;
};

console.log(repeatString("hey",-1));
// Do not edit below this line
module.exports = repeatString;
