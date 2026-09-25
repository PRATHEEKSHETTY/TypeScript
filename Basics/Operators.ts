let value1=10, value2=20;

//<<------------------------------Arithmetic Operators------------------------------//
console.log("Addition, Subtraction and Multiplication of 2 numbers is :", +value1+value2 , +value1-value2,+value1*value2);
//--------------------------------------------------------->>

//<<------------------------------Assignment Operators---------------------------//
value1=100;
value2=200;
value1= value1+value2;
console.log("Addition of 2 numbers is :", +value1);

value1= value1-value2;
console.log("Subtraction of 2 numbers is :", +value1);

//--------------------------------------------------------->>

//<<------------------------------Relational Operators/comparison >, >=, <=, ==, !=, ===(strict equality)------------------------------//

value1=100;
value2=200;
console.log("Is 1st number is greater than 2nd number :", +value1>value2);
console.log("Is 1st number is less than 2nd number :", +value1<value2);
console.log("Is 1st number is equal to 2nd number :", +value1==value2);
//--------------------------------------------------------->>

//-----------------------------------Difference between == and ===---------------------->>
let number1:any=100;
let number2:any="100";
console.log("Are the numbers equal?", number1==number2); //compares only values and ignores the data type
console.log("Are the numbers are equal?", number1===number2); //compares both values and data type, returns false if data types are different
//--------------------------------------------------------->>

//-----------------------------------Logical Operators---------------------->> 
//logical AND (&&) ! operator
let a=10, b=20;
console.log("Logical AND (&&) operator :", a>5 && b>15); //true && true = true
console.log("Logical AND (&&) operator :", a>5 && b<15); //true && false = false

//logical OR (||) operator
console.log("Logical OR (||) operator :", a>5 || b>15); //true || true = true
console.log("Logical OR (||) operator :", a>5 || b<15); //true || false = true

//logical NOT (!) operator
console.log("Logical NOT (!) operator :", !(a>5)); //false

//--------------------------------------------------------->>

//Increment and Decrement Operators
let num1=10, num2=20;
console.log("Increment operator :", ++num1); //pre-increment operator
console.log("Decrement operator :", --num2); //pre-decrement operator

console.log("Increment operator :", num1++); //post-increment operator
console.log("Decrement operator :", num2--); //post-decrement operator

console.log("Value of 1st number is :", +num1);
console.log("Value of 2nd number is :", +num2);

let res=num1++;
console.log("Value of 1st number is :", +res);
let res2=++num1;
console.log("Value of 1st number is :", +res2);

//--------------------------------------------------------->>

//Ternary Operator
let age=20;
let result= (age>=18) ? "Eligible to vote" : "Not eligible to vote";
console.log(result);

//--------------------------------------------------------->>