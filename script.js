const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}


console.log("Hello, World!");

let message;
message = "Hello";

let message2 = 'Hello!'; //we can combine it into a single line
alert(message2); 

let user = 'Kuba', age = 21, message3 = 'Hi'; //we can declare multiple variables in a single line but it's not recommended

let user2 = 'Huba',
    age2 = 22,
    message4 = 'sup'; // or do it in multiple lines

let hello = 'Hello World!';
let message5;
message5 = hello; // we can also copy data from one variable to the other

let $ = 1;
let _ = 2; // we can use these symbols aswell but the name can't start with a digit and we can't use other symbols

const myBirthday = '19.11.2002'; // const can't be changed they are constants

// let name1 = 'John';
// let admin;
// admin = name1;
// alert(admin);

let ourPlanetName = "Earth";
let currentUserName = "John";

console.log((3 + 2) - 76 * (1 + 1));

console.log(99 + 144);

console.log(99 + 144 + 14 + 424 + 53 + 5);

console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a);
console.log(9 * a);

let b = 7 * a;
console.log(b);

const max = 57;
let actual = max - 13;
let percentage = actual / max;

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement


// += Addition assignment x += 4;    x = x + 4;
// -= Subtraction assignment x -= 3;     x = x - 3;
// *= Multiplication assignment	x *= 3; 	x = x * 3;
// /= Division assignment x /= 5;    x = x / 5;

// ===	Strict equality	Tests whether the left and right values are identical to one another	5 === 2 + 4
// !==	Strict-non-equality	Tests whether the left and right values are not identical to one another	5 !== 2 + 3
// <	Less than	Tests whether the left value is smaller than the right one.	10 < 6
// >	Greater than	Tests whether the left value is greater than the right one.	10 > 20
// <=	Less than or equal to	Tests whether the left value is smaller than or equal to the right one.	3 <= 2
// >=	Greater than or equal to	Tests whether the left value is greater than or equal to the right one.	5 >= 4

let num1 = 10;
let num2 = 33;
let num3 = 60;
let num4 = 45;

let num5 = num1 + num2;
let num6 = num3 - num4;

let finalResult = num5 * num6;

let evenOddResult = finalResult % 2;

console.log(finalResult);
console.log(evenOddResult);


let result = 7 + 13 / 9 + 7;
let result2 = 100 / 2 * 6;

result *= result2;
console.log(result);
let finalResult = result.toFixed(2);
console.log(typeof finalResult);
finalResult = Number(finalResult);
console.log(typeof finalResult)
let finalNumber = finalResult;
console.log(finalNumber);

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

let weightComparison = eleWeight <= mouseWeight;
console.log(weightComparison);


// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

let heightComparison = ostrichHeight >= duckHeight;
console.log(heightComparison);


// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

let pwdMatch = pwd1 === pwd2;
console.log(pwdMatch);



const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);


// In JavaScript, you can choose single quotes ('),
// double quotes ("), or backticks (`) to wrap your strings in.
// All of the following will work:
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);  
// Strings declared using single quotes and strings declared using double quotes are the same


// Strings declared using backticks are a special kind of string called a template literal
// Inside a template literal, you can wrap JavaScript variables or expressions inside ${ },
// and the result will be included in the string:
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

// // You can use the same technique to join together two variables:
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

// // You can use ${} only with template literals, not normal strings. 
// // You can concatenate normal strings using the + operator:
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"

// // However, template literals usually give you more readable code:
const greeting = "Hello";
const name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"


const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

// Template literals respect the line breaks in the source code, so you can write strings that span multiple lines like this:
const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);
/*
One day you finally knew
what you had to do, and began,
*/

// To have the equivalent output using a normal string you'd have to include line break characters (\n) in the string:
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/

// Including quotes in strings
// One common option is to use one of the other characters to declare the string:
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;



// Another option is to escape the problem quotation mark. 
// Escaping characters means that we do something to them to
// make sure they are recognized as text, not part of the code.
// In JavaScript, we do this by putting a backslash just before the character.
// Try this:
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);


// If you have a numeric variable that you want to convert to a string or a string variable that you want to convert to a number, you can use the following two constructs:
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string




