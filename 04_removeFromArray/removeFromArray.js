const removeFromArray = function(arr, ...argArray) {
    let newArray = arr.filter((el) => !argArray.includes(el));

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
