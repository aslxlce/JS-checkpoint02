// I. String Manipulation Functions:

// 1- Reverse a string

const arr = "As I am";
const arr2 = arr.split("").reverse().join("");
console.log(arr2);

// 2- Count characters

function countCharacters(str) {
    return str.length;
}

const inputString =
    "Yesterday is history, tomorrow is a mistery but today is a gift, thats why its called present.";
const characterCount = countCharacters(inputString);
console.log(`The number of characters in the string is: ${characterCount}`);

// 3- Capitalize words

function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const inputSentence =
    "everybody care for a minute then stop, people are only hre for a minute then stop.";
const capitalizedSentence = capitalizeWords(inputSentence);
console.log(capitalizedSentence);

// II. Array Functions:

// 1- Maximum and Minimum

let arr_ = [404, 666, 44, 405, 99];
let minValue = Math.min(...arr_);
let maxValue = Math.max(...arr_);
console.log("Minimum element is: " + minValue);
console.log("Maximum Element is: " + maxValue);

// 2- Sum of an array

let a = [404, 666, 44, 405, 99];
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum);

// 3- Filter array

const a0 = [404, 666, 44, 405, 99];

const a1 = a0.filter((number) => number % 2 === 0);
console.log("Filtered Array:", a1);

// III. Mathematical Functions:

// 1- Factorial

function fact(n) {
    let res = 1;

    if (n === 0) return 1;
    for (let i = 2; i <= n; i++) res = res * i;
    return res;
}

const ex = prompt("enter a value");
console.log(fact(ex));

// 2- Prime number checker

function checkPrime(num) {
    let i,
        flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true) console.log(num + " is prime");
    else console.log(num + " is not prime");
}
const ex2 = prompt("enter a value to check if prime or not");
console.log(checkPrime(ex2));

// 3- Fibonacci sequence

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

const ex3 = prompt("Enter a value for Fibonacci Sequence");
console.log(fibonacci(ex3));
