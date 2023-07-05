const repeatString = function(inputString, repetitionsNumber) {
    let resultString = '';
    if (repetitionsNumber < 0) return 'ERROR';
    for (let i = 0; i < repetitionsNumber; i++) {
        resultString += inputString;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
