const sumAll = function (num1, num2) {
    let numTotal = 0,
        numParameters = [num1, num2];

    for (const num of numParameters) {
        if (typeof num !== 'number' || num < 0) {
            numTotal = 'ERROR'
        }
    }

    if (num1 < num2 && numTotal !== 'ERROR') {
        for (let i = num1; i <= num2; i++) { numTotal += i; }
    } else {
        for (let i = num2; i <= num1; i++) { numTotal += i; }
    }

    return numTotal;
};

// Do not edit below this line
module.exports = sumAll;
