const palindromes = function (str) {
    let ptr1 = 0;
    let ptr2 = str.length-1;
    let i = 1;

    while(ptr1 != ptr2) {
        console.log("Iteration: " + i);
        i++;
        while(!check(str.charAt(ptr1))) {
            console.log("Index Ptr1: " + ptr1 + "; Char: " + str.charAt(ptr1));
            ptr1++;
            if (ptr1 > str.length) {
                // console.log("Index Ptr1: " + ptr1 + "; Char: " + str.charAt(ptr1));
                return "Failed1";
            }
        }
        // console.log("Ptr1: " + ptr1);

        while(!check(str.charAt(ptr2))) {
            ptr2--;
            if (ptr2 < 0) {
                // console.log("Index Ptr2: " + ptr2 + "; Char: " + str.charAt(ptr2));
                return "Failed2";
            }
        }

        if (ptr1 == ptr2) {
            console.log("TRUEEEEE");
            return true;
        }

        // console.log("Ptr2: " + ptr2);
        
        console.log(ptr1 + ":" + ptr2);
        if (str.charAt(ptr1).toLowerCase() != str.charAt(ptr2).toLowerCase()) {
            return false;
        }
        ptr1++;
        ptr2--;
        console.log("---------------------------------");
        //A car, a man, a maraca.
        //A car, a man, a maraca.
    }

    return true;
};

const check = (char) => {
    // Does not pass isNaN(" ")
    if (char === " ") {
        return false;
    }


    let isNumber = true;
    let isLetter = true;
    if ((isNaN(char))) {
        isNumber = false;
    }

    if (char.toUpperCase() == char.toLowerCase()) {
        isLetter = false;
    }

    return isNumber || isLetter;
}

// Do not edit below this line
module.exports = palindromes;
