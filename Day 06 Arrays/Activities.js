// Activity 1: array creation and access

// task 1
let arr = [1,2,3,4,5];

for(let i = 0; i < 5; i++){
    console.log(arr[i]);
}


// task 2
let firstEle = arr[0]
let lastElement = arr[4]
console.log("fist and last element : " ,firstEle, lastElement);

// Activity 2 : array basic methods
// task 3
arr.push(6);
arr.forEach(element => {
    console.log(element);
});

// task 4
console.log("remove last element , it returns last element");
arr.pop();
arr.forEach(element => {
    console.log(element);
});

// task 5
console.log("shift first element, it returns first element");
arr.shift();
arr.forEach(element => {
    console.log(element);
});

// task 6
console.log("unshift first element, it return lenght ");
arr.unshift(1);
arr.forEach(element => {
    console.log(element);
});

// Activity array intermediate methods
// task 7
console.log("new array using map");
let newArr = arr.map((e) => (e*2))
console.log(newArr);

// task 8
console.log("new array using filter (even no.)");
let evenArr = arr.filter((e) => (e%2 == 0))
console.log(evenArr);

// task 9
console.log("sum of all value in arr");
let sum = arr.reduce((returnValue, currentValue) => (returnValue + currentValue), 0)
console.log("sum of arr is : ",sum);

// activity 4 : array iteration
// task 10 
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// task 11
arr.forEach((e) => (console.log(e)))

// activity 5: MULTI-DIMENSIONAL ARRAY
// task 12
let TwoDArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// task 13
console.log(TwoDArr);

console.log(TwoDArr[2][1]);

