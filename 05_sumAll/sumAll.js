const sumAll = function(n1, n2) {
    // Checks for non nums
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        return "ERROR";
    }
    // Checks for negatives
    if (n1 < 0 || n2 < 0) {
        return "ERROR";
    }
    

    if (n1 > n2) {
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }

    // let sum = 0;
    // for(let i = n1; i <= n2; i++) {
    //     sum += i;
    // }



    let sum = 0;
    n1--;
    let sum_n1 = (n1 * (n1+1)) / 2;
    let sum_n2 = (n2 * (n2+1)) / 2;

    sum = sum_n2 - sum_n1;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
