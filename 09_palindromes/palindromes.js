const palindromes = function (string) {
    let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, ''); // ^ - not, [] - calss of alphanumeric chrs, g - replace globally 
    return cleanString === cleanString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
