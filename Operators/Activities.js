let a = 5, b = 9;


/* Arithmetic operations*/

// adding 2 num and log the 
console.log(a + b);

// subtract 2 num and log the result
console.log(a - b);

// multiply 2 num and log the result
console.log(a * b);

// divide 2 num and log the result
console.log(a / b);

// remainder 2 num and log the result
console.log(a % b);


/* Assignment Operators */

// task 6
a += b;
console.log(a);

// task 7
b -= a;
console.log(b);

/* Comparison operator */

// task 8
console.log(a < b);

// task 9
console.log(a > b);


// task 10
console.log(a == b);
console.log(a === b);

/* logical operator  */

// task 11
let num = 10
if (a > num && b > num) {
    console.log("num is less than a and b");
}

if (a < num || b < num) {
    console.log("num is greater than a or b");
}

if (!(a < num && b < num)) {
    console.log("num is greater than a and b");
}


/* activity 5: ternary operator */

// task 14
num = 1
num <= 0 ? console.log("number is negative") : console.log("num is pos")