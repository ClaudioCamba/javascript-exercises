const removeFromArray = function (arr, rmv1, rmv2, rmv3, rmv4) {
    let removeValues = [rmv1, rmv2, rmv3, rmv4];
    for (const person of removeValues) {
        if (arr.indexOf(person) !== -1) {
            arr.splice(arr.indexOf(person), 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
