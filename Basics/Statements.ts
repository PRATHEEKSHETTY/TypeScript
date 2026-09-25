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