//function,  named function without returning value

function display(): void{
    console.log("Hello World");
}
display();

//named function with returning  value
function addition(num1:number, num2:number): number{
   return num1+num2;
}
console.log("named function with returning  value: " +addition(100,20));

//Named function with Rest parameters
function displayRest(...args:number[]):void{
    console.log("The numbers are :", args);
}
displayRest(10,20,30,40,50);

//Named function with Rest parameters with different data types
function displayRestDiff(...args:(number|string)[]):void{
    console.log("The numbers are :", args);
}
displayRestDiff(10,20,30,"Hello",50); 

//Named function with optional parameters
function displayOptional(num1:number, num2?:number):void{
    console.log("The numbers are :", num1);
    if(num2!==undefined)
    {
        console.log("The numbers are :", num2);
    }   
}
displayOptional(10);
displayOptional(10,20);

//Named function with default parameters
function discountPrice(price:number, rate:number=0.20):void{

    let discountedPrice= price*rate;
    console.log("The discounted price is :", discountedPrice);
    
}
discountPrice(10);
discountPrice(10,0.10);

//Anonymous function assigned to a variable with returning value

let displayWord=function(): string{
    return "Hello World";
}

console.log(displayWord());

//anonymous function assigned to a variable with returning value and parameters

let additionNum=function(num1:number=20, num2:number=987): number{
    //return num1+num2;
    return num1*3;
     
}
console.log(additionNum(78));

//Arrow function with returning value and parameters

let additionArrow=(num1:number, num2:number): number=>{
    return num1+num2;
}
console.log(additionArrow(10,20));

//Arrow function with returning value and parameters with single line of code           

let additionArrowSingleLine=(num1:number, num2:number): number=> num1+num2;
console.log(additionArrowSingleLine(10,20));

//Arrow function with default parameter

let additionArrowSingleLineSingleParam=(num1:number=90): number=> num1*2.25;
console.log(additionArrowSingleLineSingleParam());        

//Arrow function with no returntype and no parameters
let newArrowFunction=(): void =>
{
    console.log("Hello Pavithra");
}
newArrowFunction();

//Arrow function with the Rest parameters
let additionArrowRest=(...args:number[]): number=>{
    let sum=0;
    for(let i=0;i<args.length;i++)
    {
        sum+=args[i];
    }
    return sum;
}
console.log("Arrow function with the Rest parameters: " + additionArrowRest(10,20,30,40,50));