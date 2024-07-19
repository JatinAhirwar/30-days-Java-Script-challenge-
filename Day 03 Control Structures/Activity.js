// if else statement
let num = 9;

// activity 1 
// task 1
if(num > 0){
    console.log("number is +ve");
} else if(num < 0){
    console.log("number is -ve");
} else{
    console.log("number is zero");
}

// task 2
let age = 17
if (age >= 18){
    console.log("eligible to vote");
} else{
    console.log("not eligible to vote");
}

// activity 2
// nested if else
let num1 = 8, num2 = 7, num3 = 9;

if (num1 >= num2) {
    if (num1 >= num3) {
      console.log(num1);
    } else {
      console.log(num3)
    }
  } else {
    if (num2 >= num3) {
      console.log(num2);
    } else {
      console.log(num3);
    }
  }

// activity 3: switch case
// task 4
let key = 9;
switch (key) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday.");
        break;

    default:
        console.log("there are only 7 days ");
        break;
}


// task 5
let score = 70
switch (true) {
    case (score >= 90 ) :
        console.log("A");
        break;
    case (score >= 80 && score <= 89):
        console.log("B")
        break;
    case (score >= 60 && score <= 79):
        console.log("C");
        break;
    case (score >= 50 && score <= 59):
        console.log("D");
        break;
    case (score >= 11 && score <= 49):
        console.log("E")
        break;
    case (score <= 10):
        console.log("F");
        break;

    default:
        break;
}


// activity 4 
// task 6
let oddOrEven = 9;
oddOrEven % 2 == 0 ? console.log("Even No.") : console.log("Odd No.");


// activity 5
// task 7
// 4 se divide krne pr 0 ana chahiya or 400 se && 100 se divide pr 0 nhi ana chahiye

let year = 2001
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("leap year");
} else{
    
    console.log("not a leap year");
}