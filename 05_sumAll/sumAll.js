const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0 || typeof n1 !== 'number' || typeof n2 !== 'number') return 'ERROR'
    // if (!Number.isInteger(n1) || !Number.isInteger(n2)) also works
    const min = Math.min(n1, n2);
    const max = Math.max(n1, n2);
    let sum = ((max - min + 1) * (min + max)) / 2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
