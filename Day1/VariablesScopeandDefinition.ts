// Syntax for declaring a variable in TypeScript Keyword VariableName:DataType(optional) = Value;
// var age:number = 25; // var is used to declare a variable in TypeScript
/* var, let, const difference 
var is function scoped, let and const are block scoped.
Use let when you want to reassign a variable, 
use const when you don't want to reassign a variable.

scope of var is function scope, let and const are block scope.
Declaration/Assignment of var is hoisted to the top of the function, let and const are not hoisted.
Re-declaration of var is allowed, let and const are not allowed to re-declare a variable in the same scope.
Re-InItialization/RE-assignment of var and let is allowed, const is not allowed to re-assign a variable.
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. 
This means that you can use a variable or function before it is declared in the code. However, it's important to note that only the declarations are hoisted, not the initializations.
*/

//<<------------------------ Scope of var, let and const ------------------------

function varScope()
{
    if(true)
    {
        var value3:number = 8;
    }
        console.log("Value of 3rd number is :", +value3);

}
varScope();

function scopeDiff()
{
    if(true)
    {
        let value4;;
        value4 = 8088;
         console.log("Value of 3rd number is :", +value4);
         const value5:number = 888;
         console.log("Value of 3rd number is :", +value5);
         var value6:number = 888;
    }
        console.log("Value of 3rd number is :", +value6);
}
scopeDiff();

//------------------------ Scope of var, let and const ------------------------>>

var city="New York"; // var is used to declare a variable in TypeScript
var city="Germany"; // re-declaration of var is allowed
var city="Delhi"; // re-declaration of var is allowed


console.log(city);


//<<------------------------Re-InItialization/RE-assignment of var, let and const ------------------------

var newCity="New York"; // var is used to declare a variable in TypeScript
newCity="Germany"; // re-assignment of var is allowed

console.log(newCity);

let number=10; // let is used to declare a variable in TypeScript
number=30; // re-assignment of let is allowed
console.log(number);

const userName="Pavithra"; // const is used to declare a variable in TypeScript
// userName="John"; // re-assignment of const is not allowed
console.log(userName);

//------------------------Re-InItialization/RE-assignment of var, let and const ------------------------>>

//<<------------------------Hoisting ------------------------
/* console.log(a); // Output: undefined (due to hoisting)
var a=10; // var is used to declare a variable in TypeScript
console.log(a); // Output: 10

console.log(b); // Output: initialization (due to hoisting)
let b=20; // let is used to declare a variable in TypeScript
console.log(b); // Output: 20

console.log(c); // Output: initialization (due to hoisting)
const c=10; // const is used to declare a variable in TypeScript
console.log(c); // Output: 10 */
//-----------------------Hoisting ------------------------>>