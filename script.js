// // console.log("Hello, World!");

// let message;
// message = "Hello";

// let message2 = 'Hello!'; //we can combine it into a single line
// // alert(message2); 

// let user = 'Kuba', age = 21, message3 = 'Hi'; //we can declare multiple variables in a single line but it's not recommended

// let user2 = 'Huba',
//     age2 = 22,
//     message4 = 'sup'; // or do it in multiple lines

// let hello = 'Hello World!';
// let message5;
// message5 = hello; // we can also copy data from one variable to the other

// let $ = 1;
// let _ = 2; // we can use these symbols aswell but the name can't start with a digit and we can't use other symbols

// const myBirthday = '19.11.2002'; // const can't be changed they are constants

// // let name1 = 'John';
// // let admin;
// // admin = name1;
// // alert(admin);

// let ourPlanetName = "Earth";
// let currentUserName = "John";

// console.log((3 + 2) - 76 * (1 + 1));

// console.log(99 + 144);

// console.log(99 + 144 + 14 + 424 + 53 + 5);

// console.log((4 + 6 + 9) / 77);

// let a = 10;
// console.log(a);
// console.log(9 * a);

// let b = 7 * a;
// console.log(b);

// const max = 57;
// let actual = max - 13;
// let percentage = actual / max;

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

// let num1 = 10;
// let num2 = 33;
// let num3 = 60;
// let num4 = 45;

// let num5 = num1 + num2;
// let num6 = num3 - num4;

// let finalResult = num5 * num6;

// let evenOddResult = finalResult % 2;

// console.log(finalResult);
// console.log(evenOddResult);


// let result = 7 + 13 / 9 + 7;
// let result2 = 100 / 2 * 6;

// result *= result2;
// console.log(result);
// let finalResult = result.toFixed(2);
// console.log(typeof finalResult);
// finalResult = Number(finalResult);
// console.log(typeof finalResult)
// let finalNumber = finalResult;
// console.log(finalNumber);

// // Statement 1: The elephant weighs less than the mouse
// const eleWeight = 1000;
// const mouseWeight = 2;

// let weightComparison = eleWeight <= mouseWeight;
// console.log(weightComparison);


// // Statement 2: The Ostrich is taller than the duck
// const ostrichHeight = 2;
// const duckHeight = 0.3;

// let heightComparison = ostrichHeight >= duckHeight;
// console.log(heightComparison);


// // Statement 3: The two passwords match
// const pwd1 = 'stromboli';
// const pwd2 = 'stROmBoLi';

// let pwdMatch = pwd1 === pwd2;
// console.log(pwdMatch);

const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
