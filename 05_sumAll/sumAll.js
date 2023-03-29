const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    else if ( !(typeof num1 === 'number') || !(typeof num2 === 'number')) return "ERROR";
    
    let endValue;
    let strtValue;
    let sum = 0;
    if (num1 > num2){
        endValue = num1
        strtValue = num2   
    }
    else{
        endValue = num2
        strtValue = num1
    }

   
    
    while( endValue >= strtValue ){
        sum += strtValue;
        strtValue +=1;
    }
    
    return sum;
};

console.log(sumAll(123,1))
// Do not edit below this line
module.exports = sumAll;
