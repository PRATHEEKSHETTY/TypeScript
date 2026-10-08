//push --> Adds one or more elements to the end of an array and returns the new length of the array.    

let numbrs: number[] = [1, 2, 3, 4, 5];
numbrs.push(6,9,90);
console.log("After push(): " + numbrs);   

//pop ---> Removes the last element from an array and returns that element. This method changes the length of the array.
let lastRemovedNumber =numbrs.pop();
console.log("After pop(): " + lastRemovedNumber);

//shift ---> Removes the first element from an array and returns that element. This method changes the length of the array.
let firstRemovedNumber = numbrs.shift();
console.log("After shift(): " + firstRemovedNumber);

//unshift ---> Adds one or more elements to the beginning of an array and returns the new length of the array.
numbrs.unshift(0);
console.log("After unshift(): " + numbrs);

//concat ---> Used to merge two or more arrays. This method does not change the existing arrays, 
// but instead returns a new array.
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];
let mergedArray = arr1.concat(arr2);
console.log("After concat(): " + mergedArray);

//slice ---> Returns a shallow copy of a portion of an array into a new array object selected
//  from start to end (end not included). The original array will not be modified.
let slicedArray = numbrs.slice(1, 2);
console.log("After slice(): " + slicedArray);

//splice ---> Changes the contents of an array by removing or replacing existing elements 
// and/or adding new elements in place.
numbrs.splice(2, 1); // Removes 1 element at index 2 and adds 99
console.log("After splice(): " + numbrs);   

numbrs.splice(2, 4, 56, 89); // Removes 1 element at index 2 and adds 99
console.log("After splice(): " + numbrs);  

//indexOf ---> Returns the first index at which a given element can be found in the array,
// or -1 if it is not present.
let index = numbrs.indexOf(56);
console.log("After indexOf(): " + index);

//lastIndexOf ---> Returns the last index at which a given element can be found in the array,
// or -1 if it is not present. The array is searched backwards, starting at fromIndex.
let lastIndex = numbrs.lastIndexOf(56);
console.log("After lastIndexOf(): " + lastIndex);

//includes ---> Determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.
let includesValue = numbrs.includes(56);
console.log("After includes(): " + includesValue);

//find ---> Returns the value of the first element in the provided array that satisfies the provided testing function. 
// Otherwise undefined is returned.
let foundValue = numbrs.find((value) => value > 50);
console.log("After find(): " + foundValue);

//findIndex ---> Returns the index of the first element in the array that satisfies the provided testing function. 
// Otherwise -1 is returned.
let foundIndex = numbrs.findIndex((value) => value > 50);
console.log("After findIndex(): " + foundIndex);

//filter ---> Creates a new array with all elements that pass the test implemented by the provided function.
let filteredArray = numbrs.filter((value) => value > 50);
console.log("After filter(): " + filteredArray);

//map ---> Creates a new array populated with the results of calling a provided function on every element in the calling array.
let mappedArray = numbrs.map((value) => value * 2);
console.log("After map(): " + mappedArray);

//forEach ---> Executes a provided function once for each array element.
numbrs.forEach((value) => console.log("After forEach(): " + value));

//reduce ---> Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let reducedValue = numbrs.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("After reduce(): " + reducedValue);

//some ---> Tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns a Boolean value.
let someValue = numbrs.some((value) => value > 50);
console.log("After some(): " + someValue);

//every ---> Tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value.
let everyValue = numbrs.every((value) => value > 0);
console.log("After every(): " + everyValue);

//sort ---> Sorts the elements of an array in place and returns the sorted array. 
// The default sort order is ascending, built upon converting the elements into strings.
numbrs.sort((a, b) => a - b);
console.log("After sort(): " + numbrs);

//reverse ---> Reverses the order of the elements of an array in place.
numbrs.reverse();
console.log("After reverse(): " + numbrs);      

