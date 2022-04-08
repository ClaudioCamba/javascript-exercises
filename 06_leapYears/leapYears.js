const leapYears = function (year) {
    // let check4 = false,
    //     check400 = false;

    // Check if it century number
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }


    // Leap years are years divisible by four
    // However, years divisible by 100 are not leap years
    // unless they are divisible by 400
};

// Do not edit below this line
module.exports = leapYears;
