const repeatString = function (word, num) {

    if (num >= 0) {
        let repeatWord = word.repeat(num);
        return repeatWord;
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = repeatString;
