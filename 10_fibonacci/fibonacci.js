const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }

    if (n == 0) {
        return 0;
    }

    if (n < 3) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2); // fib(1) + fib(0) + fib(1)
};



// Do not edit below this line
module.exports = fibonacci;
