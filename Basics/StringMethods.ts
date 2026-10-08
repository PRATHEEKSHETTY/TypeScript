//Declaration of Strings 

let singleQuoteString: string = 'Hello World';
let doubleQuoteString: string = "Hello Pavithra";
let backTickString: string=`Hello Pratheek`;

console.log(singleQuoteString,doubleQuoteString,backTickString);

//When to use back ticks:
//1. When we want to include variables in the string
let userName: string = "Pratheek";
let age: number = 25;
console.log(`My name is ${userName} and I am ${age} years old.`);
//console.log(message);

//2. When we want to create multi-line strings
// let multiLineString: string = `This is a multi-line string.
// It can span multiple lines.
// We can include variables like ${userName} and ${age}.`;
// console.log(multiLineString);   

//length ---> Returns the length of the string.
let strLength: number = singleQuoteString.length;
console.log(`Length of the string is: ${strLength}`);

//toUpperCase ---> Converts the string to uppercase letters.
let upperCaseString: string = singleQuoteString.toUpperCase();
console.log(`Uppercase string is: ${upperCaseString}`);

//toLowerCase ---> Converts the string to lowercase letters.
let lowerCaseString: string = doubleQuoteString.toLowerCase();
console.log(`Lowercase string is: ${lowerCaseString}`);

//charAt ---> Returns the character at the specified index in the string.
let charAtIndex: string = backTickString.charAt(6);
console.log(`Character at index 6 is: ${charAtIndex}`);

//indexOf ---> Returns the index of the first occurrence of the specified value in the string, or -1 if not found.
let indexOfChar: number = singleQuoteString.indexOf('o');
console.log(`Index of 'o' in the string is: ${indexOfChar}`);

//lastIndexOf ---> Returns the index of the last occurrence of the specified value in the string, or -1 if not found.
let lastIndexOfChar: number = doubleQuoteString.lastIndexOf('a');
console.log(`Last index of 'a' in the string is: ${lastIndexOfChar}`);