const leapYears = function(year) {
    let leapBool = false;
    // Check for divisibility by 4
    if (year % 4 == 0) {
        leapBool = true;
    }
    // Check for divisibility by 400 and 100
    if (year % 100 == 0) {
        leapBool = false;

        if (year % 400 == 0) {
            leapBool = true;
        }
    }

    return leapBool;
};

// Do not edit below this line
module.exports = leapYears;
