// Factorial
// 1! = 1
// 2! = 2 X 1
// 3! = 3 X 2 X 1
// 4! = 4 X 3 X 2 X 1
// 5! = 5 X 4 X 3 X 2 X 1

// Recursive Factorial
// 1! = 1
// 2! = 2 X 1!
// 3! = 3 X 2!
// 4! = 4 X 3!
// 5! = 5 X 4!


// Define Function For Factorial
function factorial(n) {
    if (n === 1) {
        return 1;
    };
    return n * factorial(n - 1);
};

const result = factorial(5);
console.log(result);
