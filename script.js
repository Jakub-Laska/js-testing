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

// Basic String Methods:
// JavaScript counts positions from zero.

// First position is 0.

// Second position is 1.

// String length
// The length property returns the length of a string:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// String charAt()
// The charAt() method returns the character at a specified index (position) in a string:
let text = "HELLO WORLD";
let char = text.charAt(0);

// String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string:
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

// String at()
// The at() method returns the character at a specified index (position) in a string.
const name = "W3Schools";
let letter = name.at(2);

// String [ ]
let text = "HELLO WORLD";
let char = text[0];

// String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

// String substring()
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

// String substr()
// The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);

// String Search Methods
// String Templates

// String toUpperCase()
// A string is converted to upper case with toUpperCase():
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

// String toLowerCase()
// A string is converted to lower case with toLowerCase():
let text1 = "Hello World!";
let text2 = text1.toLowerCase();

// String concat()
// concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
// The concat() method can be used instead of the plus operator. These two lines do the same:
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

// String trim()
// The trim() method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
let text2 = text1.trim();

// String trimStart()
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

// String trimEnd()
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text1 = "     Hello World!     ";
let text2 = text1.trimEnd();

// String padStart()
// It pads a string with another string (multiple times) until it reaches a given length.
let text = "5";
let padded = text.padStart(4,"0");

// String padEnd()
// The padEnd() method pads a string from the end.
let text = "5";
let padded = text.padEnd(4,"0");

// String repeat()
// The repeat() method returns a string with a number of copies of a string.
let text = "Hello world!";
let result = text.repeat(2);

// String replace()
// The replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
// To replace all matches, use a regular expression with a /g flag (global match):
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

// String replaceAll()
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

// String split()
// A string can be converted to an array with the split() method:
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
// If the separator is "", the returned array will be an array of single characters:
text.split("")


// W języku JavaScript dostępnych jest wiele metod operujących na stringach (łańcuchach znaków). Każda z tych metod służy do manipulacji tekstem na różne sposoby. Oto wyjaśnienia w języku polskim oraz częstotliwość, z jaką metody te są używane w web developmencie:

// Metody często używane w web developmencie:

1. **at()**: Zwraca znak na określonej pozycji w stringu. Jest mniej popularna niż `charAt()`.
2. **charAt()**: Zwraca znak z podanej pozycji. Używana w sytuacjach, gdy trzeba wyciągnąć konkretny znak z łańcucha.
3. **charCodeAt()**: Zwraca wartość Unicode znaku na podanej pozycji. Przydatne przy pracy z kodami znaków.
4. **concat()**: Łączy dwa lub więcej stringów w jeden. Używana czasami, ale częściej stosuje się operator `+`.
5. **endsWith()**: Sprawdza, czy string kończy się podanym fragmentem. Używana do walidacji tekstu.
6. **includes()**: Sprawdza, czy string zawiera podany fragment. Bardzo popularna, np. do walidacji czy szukania podciągów.
7. **indexOf()**: Zwraca pozycję pierwszego wystąpienia podanego fragmentu w stringu. Bardzo popularna, np. do wyszukiwania słów.
8. **lastIndexOf()**: Zwraca pozycję ostatniego wystąpienia podanego fragmentu w stringu. Używana do wyszukiwania od końca.
9. **length**: Zwraca długość stringa. Niezwykle popularna, używana niemal w każdej manipulacji tekstem.
10. **match()**: Wyszukuje dopasowania w stringu za pomocą wyrażeń regularnych. Bardzo używana do walidacji danych.
11. **replace()**: Zastępuje pierwszy znaleziony fragment stringa innym. Bardzo częsta w manipulacji tekstem.
12. **replaceAll()**: Zastępuje wszystkie wystąpienia danego fragmentu. Często używana do globalnych zamian.
13. **slice()**: Wyciąga fragment stringa. Bardzo popularna przy manipulacji tekstem.
14. **split()**: Dzieli string na tablicę, rozdzielając go za pomocą określonego separatora. Często stosowana do rozbijania tekstu na części.
15. **startsWith()**: Sprawdza, czy string zaczyna się od podanego fragmentu. Używana do walidacji danych wejściowych.
16. **substring()**: Wyciąga fragment stringa między dwoma indeksami. Często używana do pracy z częściami tekstu.
17. **toLowerCase()** i **toUpperCase()**: Zmienia string na małe/wielkie litery. Bardzo popularne do normalizacji tekstu przed jego porównaniem.
18. **trim()**: Usuwa białe znaki z początku i końca stringa. Często używana w walidacji formularzy.

//  Rzadziej używane metody:

1. **charCodeAt()** i **codePointAt()**: Używane, gdy potrzebna jest praca z Unicode (np. w międzynarodowych aplikacjach).
2. **fromCharCode()**: Rzadziej używana, przydatna przy konwertowaniu kodów Unicode na znaki.
3. **localeCompare()**: Używana do porównywania stringów w zależności od lokalizacji, głównie w aplikacjach międzynarodowych.
4. **padEnd()** i **padStart()**: Dodaje znaki na początku lub końcu stringa. Czasem używana przy formatowaniu danych.
5. **repeat()**: Zwraca nowy string powtórzony określoną ilość razy. Używana np. przy generowaniu powtarzalnych wzorców.
6. **toLocaleLowerCase()** i **toLocaleUpperCase()**: Rzadziej używane zamienniki `toLowerCase()` i `toUpperCase()`, biorące pod uwagę lokalizację użytkownika.

// W codziennym web developmencie najczęściej spotkasz się z metodami do manipulacji fragmentami tekstu (`indexOf()`, `includes()`, `replace()`, `split()`, `slice()`, `trim()`), jak również z metodami do zmiany wielkości liter (`toLowerCase()`, `toUpperCase()`).


// String HTML Wrapper Methods
// HTML wrapper methods return a string wrapped inside an HTML tag.

// These are not standard methods, and may not work as expected.
anchor()	Displays a string as an anchor
big()	Displays a string using a big font
blink()	Displays a blinking string
bold()	Displays a string in bold
fixed()	Displays a string using a fixed-pitch font
fontcolor()	Displays a string using a specified color
fontsize()	Displays a string using a specified size
italics()	Displays a string in italic
link()	Displays a string as a hyperlink
small()	Displays a string using a small font
strike()	Displays a string with a strikethrough
sub()	Displays a string as subscript text
sup()	Displays a string as superscript text

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// Comparisons
// We know many comparison operators from maths.

// In JavaScript they are written like this:

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// Boolean is the result
// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.


// there’s a solid way to avoid problems with them:

// Treat any comparison with undefined/null except the strict equality === with exceptional care.
// Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

// Summary
// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.


// 5 > 4 true
// "apple" > "pineapple" false
// "2" > "12" true
// undefined == null true
// undefined === null false
// null == "\n0\n" false
// null === +"\n0\n"false








// W języku JavaScript dostępnych jest wiele metod operujących na stringach (łańcuchach znaków). Każda z tych metod służy do manipulacji tekstem na różne sposoby. Oto wyjaśnienia w języku polskim oraz częstotliwość, z jaką metody te są używane w web developmencie:

// Metody często używane w web developmencie:

1. **at()**: Zwraca znak na określonej pozycji w stringu. Jest mniej popularna niż `charAt()`.
2. **charAt()**: Zwraca znak z podanej pozycji. Używana w sytuacjach, gdy trzeba wyciągnąć konkretny znak z łańcucha.
3. **charCodeAt()**: Zwraca wartość Unicode znaku na podanej pozycji. Przydatne przy pracy z kodami znaków.
4. **concat()**: Łączy dwa lub więcej stringów w jeden. Używana czasami, ale częściej stosuje się operator `+`.
5. **endsWith()**: Sprawdza, czy string kończy się podanym fragmentem. Używana do walidacji tekstu.
6. **includes()**: Sprawdza, czy string zawiera podany fragment. Bardzo popularna, np. do walidacji czy szukania podciągów.
7. **indexOf()**: Zwraca pozycję pierwszego wystąpienia podanego fragmentu w stringu. Bardzo popularna, np. do wyszukiwania słów.
8. **lastIndexOf()**: Zwraca pozycję ostatniego wystąpienia podanego fragmentu w stringu. Używana do wyszukiwania od końca.
9. **length**: Zwraca długość stringa. Niezwykle popularna, używana niemal w każdej manipulacji tekstem.
10. **match()**: Wyszukuje dopasowania w stringu za pomocą wyrażeń regularnych. Bardzo używana do walidacji danych.
11. **replace()**: Zastępuje pierwszy znaleziony fragment stringa innym. Bardzo częsta w manipulacji tekstem.
12. **replaceAll()**: Zastępuje wszystkie wystąpienia danego fragmentu. Często używana do globalnych zamian.
13. **slice()**: Wyciąga fragment stringa. Bardzo popularna przy manipulacji tekstem.
14. **split()**: Dzieli string na tablicę, rozdzielając go za pomocą określonego separatora. Często stosowana do rozbijania tekstu na części.
15. **startsWith()**: Sprawdza, czy string zaczyna się od podanego fragmentu. Używana do walidacji danych wejściowych.
16. **substring()**: Wyciąga fragment stringa między dwoma indeksami. Często używana do pracy z częściami tekstu.
17. **toLowerCase()** i **toUpperCase()**: Zmienia string na małe/wielkie litery. Bardzo popularne do normalizacji tekstu przed jego porównaniem.
18. **trim()**: Usuwa białe znaki z początku i końca stringa. Często używana w walidacji formularzy.

//  Rzadziej używane metody:

1. **charCodeAt()** i **codePointAt()**: Używane, gdy potrzebna jest praca z Unicode (np. w międzynarodowych aplikacjach).
2. **fromCharCode()**: Rzadziej używana, przydatna przy konwertowaniu kodów Unicode na znaki.
3. **localeCompare()**: Używana do porównywania stringów w zależności od lokalizacji, głównie w aplikacjach międzynarodowych.
4. **padEnd()** i **padStart()**: Dodaje znaki na początku lub końcu stringa. Czasem używana przy formatowaniu danych.
5. **repeat()**: Zwraca nowy string powtórzony określoną ilość razy. Używana np. przy generowaniu powtarzalnych wzorców.
6. **toLocaleLowerCase()** i **toLocaleUpperCase()**: Rzadziej używane zamienniki `toLowerCase()` i `toUpperCase()`, biorące pod uwagę lokalizację użytkownika.

// W codziennym web developmencie najczęściej spotkasz się z metodami do manipulacji fragmentami tekstu (`indexOf()`, `includes()`, `replace()`, `split()`, `slice()`, `trim()`), jak również z metodami do zmiany wielkości liter (`toLowerCase()`, `toUpperCase()`).


// String HTML Wrapper Methods
// HTML wrapper methods return a string wrapped inside an HTML tag.

// These are not standard methods, and may not work as expected.
anchor()	Displays a string as an anchor
big()	Displays a string using a big font
blink()	Displays a blinking string
bold()	Displays a string in bold
fixed()	Displays a string using a fixed-pitch font
fontcolor()	Displays a string using a specified color
fontsize()	Displays a string using a specified size
italics()	Displays a string in italic
link()	Displays a string as a hyperlink
small()	Displays a string using a small font
strike()	Displays a string with a strikethrough
sub()	Displays a string as subscript text
sup()	Displays a string as superscript text


// Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:

// Treat any comparison with undefined/null except the strict equality === with exceptional care.
// Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false


// JavaScript if, else, and else if

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

// Example
// If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


// Logical operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

// Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

// || (OR)
// The “OR” operator is represented with two vertical line symbols:

result = a || b;

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
// For example:

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}


// && (AND)
// The AND operator is represented with two ampersands &&:

result = a && b;

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}


// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.

result = !value;

let age = 55;
if (age >= 14 && age <=90) {
  alert('yes')} else {
    alert('no')
  };


let userName = prompt('Who are you');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');

  if (pass === 'Admin123') {
    alert('Welcome!');
  } else if (pass === '' || pass === null) {
    alert('Canceled');
  } else {
    alert('Wrong password');
  } 
} else if (userName === '' || userName === null) {
  alert(Canceled);
} else {
  alert('I do not know you');
}

