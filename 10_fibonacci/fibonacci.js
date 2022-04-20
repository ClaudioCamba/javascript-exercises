const fibonacci = function (num) {
    let total = [];
    for (var i = 0; i < num; i++) {
        if (total.length < 2) {
            total.push(1);
        } else {
            total.push(total[total.length - 2] + total[total.length - 1]);
        }
    }
    if (total.length === 0) {
        return 'OOPS'
    } else {
        return total[total.length - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
