// Activity 1: Template literals
//task1 
const name = "Alice";
const age = 30;

const personInfo = `
Name: ${name}
Age: ${age}
`;

console.log(personInfo);


// task 2
const multiLineString = `
This is a multi-line string.
It can span multiple lines.
You can include variables or expressions inside: ${2 + 2}.
Template literals allow for embedded expressions like this one: ${`Hello`.toUpperCase()}.
`;

console.log(multiLineString);

// Activity 2: Destructuring
//task3
const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);


// task 4
const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

const { title, author } = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);


// Activity 3: Spread and Rest Operators
// Task 5
const originalArray = [1, 2, 3];
const additionalElements = [4, 5, 6];

const newArray = [...originalArray, ...additionalElements];

console.log(newArray);


// Task 6
function sumAll(...numbers) {
    return numbers.reduce((total, current) => total + current, 0);
}

const result = sumAll(1, 2, 3, 4, 5);

console.log(result); // Output: 15


// Activity 4: Default Parameters
// task 7
function multiply(a, b = 1) {
    return a * b;
}

const resultWithSecondParam = multiply(5, 3);
const resultWithoutSecondParam = multiply(5);

console.log(resultWithSecondParam); // Output: 15
console.log(resultWithoutSecondParam); // Output: 5


// Activity 5: Enhanced Object Literals
// Task 8
// const name = "Alice";
// const age = 30;

const person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    incrementAge() {
        this.age += 1;
        console.log(`I am now ${this.age} years old.`);
    }
};

console.log(person);
person.greet();
person.incrementAge();


// task 9
const propertyName1 = "firstName";
const propertyName2 = "lastName";

const newPerson = {
    [propertyName1]: "Alice",
    [propertyName2]: "Smith",
    age: 30
};

console.log(newPerson);
