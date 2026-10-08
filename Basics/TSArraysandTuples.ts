//Arrays in TypeScript are similar to arrays in JavaScript, but they have additional features 
// such as type annotations and tuple types. Here are some examples of how to use arrays in 
// TypeScript:      

// 1. Declaring an array with a specific type
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];   

// 2. Declaring an array with a generic type
let numbersGeneric: Array<number> = [1, 2, 3, 4, 5];
let fruitsGeneric: Array<string> = ["apple", "banana", "orange"];   

// 3. Declaring a tuple type
let person: [string, number] = ["John", 30]; // A tuple with a string and a number

// 4. Accessing array elements
console.log(numbers[0]); // Output: 1
console.log(fruits[1]); // Output: banana
console.log(person[0]); // Output: John

//5. Adding elements to an array
numbers.push(6); // Adds 6 to the end of the numbers array
fruits.unshift("grape"); // Adds grape to the beginning of the fruits array

//6. Removing elements from an array
numbers.pop(); // Removes the last element from the numbers array
fruits.shift(); // Removes the first element from the fruits array

//7. Iterating over an array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (const fruit of fruits) {
    console.log(fruit);
}

//8. Using array methods
let doubledNumbers = numbers.map(num => num * 2); // Creates a new array with each number doubled
let filteredFruits = fruits.filter(fruit => fruit.startsWith("a")); // Creates a new array with fruits that start with "a"              


//My Learnings

let emplId : Array<number>=[101,102,103,104,105];
const len=emplId.length;
for(let i =0;i<len;i++)
{
            console.log("Employee Id is :",emplId[i]);  
            emplId.push(106);
}

//Iterating using in in for loop
let emplNameandId : Array<string | number>=[ "Alice", 101, "Charlie", 102, "Eve" ];

for(let i in emplNameandId) // in iterates over the indices of the array
{
    console.log("Employee Name is :",emplNameandId[i]);
}

for (let i of emplNameandId) // of iterates over the values of the array
{
    console.log("Employee Name is :",i);
}

//Array with functions

function searchElement(ele:number, arr: number[]): boolean
{
   for(let i=0;i<arr.length;i++)
   {
        if(arr[i]===ele)
        {
            return true;
        }
   }
   return false;    
}

let arr: number[]=[1,2,3,4,5];

console.log("Is number present in the array? :",searchElement(15,arr));

// A function takes an array as parameter and returns as an Array

function capitalizeWords(arr:string[]) : string[]
{
    let upperCaseWord: string[]=[];
    for(let i=0; i<arr.length; i++)
    {
        upperCaseWord[i]= arr[i].toUpperCase();
    }
    return upperCaseWord;
}

console.log("Capitalized words are :",capitalizeWords(["hello","world","typescript"]));

//tuples in TypeScript are a way to define an array with a fixed number of elements, where each element can have a different type. Here are some examples of how to use tuples in TypeScript:

// 1. Declaring a tuple type
let personTuple: [string, number] = ["John", 30]; // A tuple with a string and a number

// 2. Accessing tuple elements
console.log(personTuple[0]); // Output: John
console.log(personTuple[1]); // Output: 30

// 3. Adding elements to a tuple
personTuple.push("Engineer"); // Adds a string to the end of the tuple
console.log(personTuple); // Output: ["John", 30, "Engineer"]

// 4. Removing elements from a tuple
personTuple.pop(); // Removes the last element from the tuple
console.log(personTuple); // Output: ["John", 30]               


