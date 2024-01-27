const repeatString = function(pString, numRepeat) {
    let repeatedString = "";
    if (numRepeat < 0) {
        repeatedString = "ERROR";
    } else {
        for (let i = 0; i < numRepeat; i++) {
            repeatedString += pString;
        }
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
