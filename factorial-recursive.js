// Define Function For Factorial
function factorial(n) {
    if (n === 1) {
        return 1;
    };
    return n * factorial(n - 1);
};

const result = factorial(5);
console.log(result);
