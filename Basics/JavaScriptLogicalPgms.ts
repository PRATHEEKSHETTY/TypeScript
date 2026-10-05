// Most frequently asked 21 programs in JavaScript interviews
// Run with: node js_interview_programs.js

// 1. Longest word in a sentence
function longestWord(sentence: string) {
  let longest = "";
  for (const word of sentence.split(/\s+/)) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
console.log("1.", longestWord("I love automation testing with Playwright")); // automation (first of the equally long words)

// 2. Palindrome check
function isPalindrome(str: string) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
}
console.log("2.", isPalindrome("A man, a plan, a canal: Panama"), isPalindrome("hello")); // true false

// 3. Remove duplicates from an array
function removeDuplicates(arr: Iterable<unknown> | null | undefined) {
  return [...new Set(arr)];
}
// Without Set:
function removeDuplicatesManual(arr: any[]) {
  return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
}
console.log("3.", removeDuplicates([1, 2, 2, 3, 4, 4, 5]), removeDuplicatesManual([1, 1, 2, 3, 3])); // [1,2,3,4,5] [1,2,3]

// 4. Reverse a string without built-in methods
function reverseString(str: string | any[]) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log("4.", reverseString("JavaScript")); // tpircSavaJ

// 5. Max count of consecutive 1's in an array
function maxConsecutiveOnes(arr: number[]) {
  let max = 0, count = 0;
  for (const num of arr) {
    if (num === 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max;
}
console.log("5.", maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1])); // 3

// 6. Factorial of a number
function calculateFactorial(n: number) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
// Recursive version:
const calculateFactorialRec = (n: number): number =>
  n <= 1 ? 1 : n * calculateFactorialRec(n - 1);
console.log("6.", calculateFactorial(5), calculateFactorialRec(6)); // 120 720

// 7. Merge two sorted arrays and keep them sorted
function mergeSorted(a: string | any[], b: string | any[]) {
  const result = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) result.push(a[i++]);
    else result.push(b[j++]);
  }
  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);
  return result;
}
console.log("7.", mergeSorted([0, 3, 4, 31], [4, 6, 30])); // [0,3,4,4,6,30,31]

// 8. Every value in arr1 has its square in arr2 (same frequency)
function isSquaredArray(arr1: string | any[], arr2: string | any[]) {
  if (arr1.length !== arr2.length) return false;
  const freq: Record<number, number> = {};
  for (const n of arr2) freq[n] = (freq[n] || 0) + 1;
  for (const n of arr1) {
    const sq = n * n;
    if (!freq[sq]) return false;
    freq[sq]--;
  }
  return true;
}
console.log("8.", isSquaredArray([1, 2, 3], [4, 1, 9]), isSquaredArray([1, 2, 2], [1, 4, 9])); // true false

// 9. Anagram check (one string formed by rearranging the other)
function isAnagram(s1: string, s2: string) {
  const clean = (s: string) => s.toLowerCase().replace(/\s/g, "");
  const a = clean(s1), b = clean(s2);
  if (a.length !== b.length) return false;
  const count: Record<string, number> = {};
  for (const ch of a) count[ch] = (count[ch] || 0) + 1;
  for (const ch of b) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}
console.log("9.", isAnagram("listen", "silent"), isAnagram("hello", "world")); // true false

// 10. Unique objects from an array
function uniqueObjects(arr: any[]) {
  const seen = new Set();
  return arr.filter((obj: any) => {
    const key = JSON.stringify(obj);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
console.log(
  "10.",
  uniqueObjects([
    { name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" },
  ])
); // [{name:"sai"},{name:"Nang"},{name:"111111"}]

// 11. Maximum number in an array
function findMax(arr: string | any[]) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
// Shortcut: Math.max(...arr)
console.log("11.", findMax([3, 17, 9, 42, 8])); // 42

// 12. Only even numbers
const getEvens = (arr: any[]) => arr.filter((n: number) => n % 2 === 0);
console.log("12.", getEvens([1, 2, 3, 4, 5, 6])); // [2,4,6]

// 13. Prime number check
function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("13.", isPrime(7), isPrime(10), isPrime(1)); // true false false

// 14. Largest element in a nested array
function largestInNested(arr: any[]) {
  let max = -Infinity;
  for (const item of arr) {
    const value = Array.isArray(item) ? largestInNested(item) : item;
    if (value > max) max = value;
  }
  return max;
}
console.log("14.", largestInNested([[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]])); // 709

// 15. Fibonacci sequence up to n terms
function fibonacci(n: number) {
  const seq = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    seq.push(a);
    [a, b] = [b, a + b];
  }
  return seq;
}
console.log("15.", fibonacci(10)); // [0,1,1,2,3,5,8,13,21,34]

// 16. Count occurrences of each character
function charCount(str: string) {
  const count: Record<string, number> = {};
  for (const ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }
  return count;
}
console.log("16.", charCount("hello")); // { h:1, e:1, l:2, o:1 }

// 17. Sort numbers in ascending order
const sortAsc = (arr: number[]) => [...arr].sort((a, b) => a - b);
console.log("17.", sortAsc([5, 1, 10, 3])); // [1,3,5,10]

// 18. Sort numbers in descending order
const sortDesc = (arr: number[]) => [...arr].sort((a, b) => b - a);
console.log("18.", sortDesc([5, 1, 10, 3])); // [10,5,3,1]

// 19. Reverse the order of words without using reverse()
function reverseWords(sentence: string) {
  const words = sentence.trim().split(/\s+/);
  const result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }
  return result.join(" ");
}
console.log("19.", reverseWords("Playwright is fun to learn")); // "learn to fun is Playwright"

// 20. Flatten a nested array
function flatten(arr: any[]): any[] {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) result.push(...flatten(item));
    else result.push(item);
  }
  return result;
}
// Built-in shortcut: arr.flat(Infinity)
console.log("20.", flatten([1, [2, [3, [4, 5]], 6]])); // [1,2,3,4,5,6]

// 21. Convert "a.b.c" and a value into a nested object
function stringToObject(path: string, value: string) {
  return path.split(".").reduceRight((acc: any, key: any) => ({ [key]: acc }), value);
}
console.log("21.", JSON.stringify(stringToObject("a.b.c", "someValue"))); // {"a":{"b":{"c":"someValue"}}}