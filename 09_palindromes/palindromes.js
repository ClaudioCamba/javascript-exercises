const palindromes = function (str) {
    return str.replace(/[^a-zA-Z]/g, '').toLowerCase() === str.split('').reverse().join('').replace(/[^a-zA-Z]/g, '').toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
