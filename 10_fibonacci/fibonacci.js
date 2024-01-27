const fibonacci = function(count) { 
    if (count < 0) return 'OOPS';
    const fib = [0, 1];
    for (let i = 1; i < count; i++) {
        fib[i+1] = fib[i] + fib[i-1];
        //fib.push(fib[i] + fib[i-1]);
    }
    return fib[count];
};

// JavaScript is a dynamically typed language, which means that the type of a variable is not explicitly defined and can change during runtime. 
// String can be converted to a number using implicit type coercion
// The function will proceed with the conversion.

// Do not edit below this line
module.exports = fibonacci;
