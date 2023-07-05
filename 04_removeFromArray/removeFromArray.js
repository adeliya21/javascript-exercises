const removeFromArray = function(inputArray, ...args) { //any number of arguments using the rest parameter syntax
    //solution using .forEach method
    let newArray = [];
    inputArray.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;

    //solution using .filter method
    //return inputArray.filter(val => !args.includes(val));   
};

// Do not edit below this line
module.exports = removeFromArray;
