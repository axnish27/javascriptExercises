const removeFromArray = function(array,...args) {
    let arr = []
    for(let i = 0; i < array.length;i++)
    {
        if (args.includes(array[i]))
        {
            continue
        }
        else
        {
            
            arr.push(array[i])
        }
        
    }
    return arr
};

console.log(removeFromArray([0,1,2,3,4,5,6,"hey"],"hey",3,5,7,8))

// Do not edit below this line
module.exports = removeFromArray;
