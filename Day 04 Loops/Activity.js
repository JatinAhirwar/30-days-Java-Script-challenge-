// task 1
for (let i = 1; i <= 10 ; i++) {
    console.log(i);
}

// task 2
for (let i = 1; i <= 10; i++) {
    console.log(i*5);   
}

// activity 2
// while loop
let n = 10, sum = 0;
while (n > 0) {
    sum += n;
    n--
}

console.log("sum of n num:: ", sum);


// task 4
n = 10
while (n > 0){
    console.log(n);
    n--
}

// activity 3
// task 5
console.log("number 1 - 5");
n=1
do {
    console.log(n);
    n++
} while (n <= 5);

// task 6

console.log("fact of num");
let num = 5, fact = 1;
do {
    fact *= num
    num--;
} while (num >= 1);
console.log("factorial of ", num , " is : ", fact);

// task 7
for (let i = 1; i <= 5; i++) {
    
    for (let j = 1; j <= i; j++) {
        // console.log(" * ");
        process.stdout.write(" * ") 
    }
    console.log();
}

// task 8
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        continue;
    }
    console.log(i);
}

// task 9
for (let i = 1; i <= 10; i++) {
    if(i == 7){
        break;
    }
    console.log(i);
}