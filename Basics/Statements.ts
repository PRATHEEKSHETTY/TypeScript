let grade=99;
if(grade>80)
{
    console.log(`${grade} You've got distinction`);
}
else if(grade>60)
{
    console.log(`${grade} You've got first class`);
}
else if(grade>35) 
{
    console.log(`${grade} You've got second class`);
}
else
{
    console.log(`${grade} You've failed`);
}
console.log("End of the grade program");

//Switch Statement
let day=1;
switch(day)
{
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");        
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}
console.log("End of the switch program");

//Switch Statement
let x=14, y=5;
switch(x-y)
{
    case 10: console.log("Value is 10"); break;
    case 0: console.log("Value is 0"); break;
    default: console.log("Value is not 10 or 0");
}
console.log("End of the switch program");

//print 5 numbers using while loop
let j=1;
while(j<=3)
{
    //console.log(j);
    if(j%2===0)
    {
        console.log(`${j} is even`);
    }
    else
    {
        console.log(`${j} is odd`);
    }
    j++;
}
console.log("End of the while with condition program");

// Decrementing a number using while loop
let i=5;
while(i>0)
{
    console.log(`${i}`);
    i--;
}
console.log("End of the Decrementing a number using while loop program");

// Do while loop
let k=1;
do
{
    console.log(`${k}`);
    k++;
}while(k<=3);
console.log("End of the Do while program");

//FOR loop

for(let k=1;k<5;k++)
{
    if(k%2===0)
    {
        console.log(`${k} is even`);
    }
    else
    {
        console.log(`${k} is odd`);
    }
}
console.log("End of the for loop program");

for(let k=1;k<=10;k=k+2);
{
    console.log(`${k}`);
}
console.log("End of the for loop program");

//Just a demo to show the use of break and continue statements in for loop
for(let k=1;k<=10;k++)
{
    if(k===5)
    {
        break;
    }
    console.log(`${k}`);
}
console.log("End of the for loop program with break statement");

for(let k=1;k<=10;k++)
{
    if(k===5)
    {
        continue;
    }
    console.log(`${k}`);
}
console.log("End of the for loop program with continue statement");

//write a program to print the sum of first 10 natural numbers using for loop
let sum=0;
for(let k=1;k<=10;k++)
{
    sum=sum+k;
}
console.log(`The sum of first 10 natural numbers is ${sum}`);
console.log("End of the for loop program to print the sum of first 10 natural numbers");        

//write a program to calculate the factorial of a number using for loop
let num=5;
let factorial=1;
for(let k=1;k<=num;k++)
{
    factorial=factorial*k;
}
console.log(`The factorial of ${num} is ${factorial}`);
console.log("End of the for loop program to calculate the factorial of a number");      

//write a program to reverse a number using while loop
let numb=12345;
let reversedNumber=0;           

while(numb>0)
{
    let digit=numb%10;
    reversedNumber=reversedNumber*10+digit;
}
console.log(`The reversed number of ${numb} is ${reversedNumber}`);
console.log("End of the while loop program to reverse a number");     

//print numbers from 5 to 50 using for loop
for(let k=5;k<=50;k++)
{
    console.log(`${k}`);
}
console.log("End of the for loop program to print numbers from 5 to 50");   

//print table of 7 
for(let k=1;k<=10;k++)
{
    console.log(`7 x ${k} = ${7*k}`);
}
console.log("End of the for loop program to print table of 7"); 