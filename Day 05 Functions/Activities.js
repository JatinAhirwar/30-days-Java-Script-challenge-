// Activity 1: function declaraion
// task 1
function evenOrOdd(num) {
    return num % 2 == 0 ? console.log("num is even") : console.log("num is odd");
}

// evenOrOdd(10);

// Task 2
function sqr(num) {
    return num * num
}

// console.log("sqr is : ",sqr(2));

// Activity 2
// task 3   
function maxNum(num1, num2) {
    return num1 > num2 ? console.log("num1 is max: ", num1) : console.log("num2 is max: ", num2);
}

maxNum(18, 53)

function conStr(str1, str2) {
    return str1 + str2
}

result = conStr("jat", "in")
console.log(result);

// activity 3: arrow fun
// task 5

sumOfNum = (num1, num2) => (
    num1 + num2
)

console.log(sumOfNum(2, 4));

