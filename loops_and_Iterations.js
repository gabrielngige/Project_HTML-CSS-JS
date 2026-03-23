// //loops and writing functions.
// //DRY PRINCIPLE: Don't Repeat Yourself.
// //A function is a block of code that performs a specific task.
// //Functions are reusable, they can be called multiple times in a program.
// //Functions can take parameters, which are values that are passed to the function when it is called.
// //Functions can return values, which are the output of the function.

// //Example of a function that takes parameters and returns a value:
// function add(a, b) {
//   return a + b;
// }

// console.log(add(2, 3)); // Output: 5
// console.log(add(10, 20)); // Output: 30

// //How to output "PETER" 10 times
// //example of repetition
// console.log("peter");
// console.log("peter");
// console.log("peter");
// console.log("peter");
// console.log("peter");
// console.log("peter");
// console.log("peter");
// console.log("peter");
// console.log("peter");
// console.log("peter");

// //LOOP EXAMPLE
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

// //example of a loop that outputs "PETER" 10 times:
// for (let i = 0; i < 10; i++) {
//   console.log("PETER");
// }

// //example of a loop that outputs the numbers from 0 to 10 (ascending order):
// for (let i = 0; i <= 10; i = i + 1) {
//   console.log(i);
// }

// //example of a loop that outputs the numbers from 10 to 0 (descending order):
// for (let i = 10; i >= 0; i = i - 1) {
//   console.log(i);
// }

// while (condition) {
//   // code to be executed
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i -= 1;
// }
// //output the numbers from 10 to 0 using a while loop.
// // 10
// // 9
// // 8
// // 7
// // 6
// // 5
// // 4
// // 3
// // 2
// // 1
// // 0

// let j = 0;
// while (j <= 10) {
//   console.log(j);
//   j += 1;
// }
// //output the numbers from 0 to 10 using a while loop.
// // 0
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10  
// //breakout session; print all the numbers divisible by two between 0 and 20 using for loop and while loop.
// //using for loop
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// //using while loop
// let k = 0;
// while (k <= 20) {
//   if (k % 2 === 0) {
//     console.log(k);
//   }
//   k += 2;
// }

// //arrays
// //an array is a data structure that can hold multiple values of the same type.
// //arrays are ordered, meaning that the values are stored in a specific order and can be accessed using an index.
// //arrays are mutable, meaning that the values can be changed after they are created.

// let fruits = ["apple", "banana", "orange", "grape"];
// console.log(fruits[0]); // Output: apple
// console.log(fruits[1]); // Output: banana
// console.log(fruits[2]); // Output: orange
// console.log(fruits[3]); // Output: grape

// //example of a loop that outputs all the elements of an array:
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// //example of a loop that outputs all the elements of an array using a while loop:
// let l = 0;
// while (l < fruits.length) {
//   console.log(fruits[l]);
//   l += 1;
// }

// //example of a function that takes an array as a parameter and returns the sum of all the elements in the array:
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Output: 15   

// //example of a function that can add and remove elements from an array
// function addElement(arr, element) {
//   arr.push(element);
//   return arr;
// }

// function removeElement(arr, element) {
//   let index = arr.indexOf(element);
//   if (index > -1) {
//     arr.splice(index, 1);
//   }
//   return arr;
// }
// let myArray = [1, 2, 3];
// console.log(addElement(myArray, 4)); // Output: [1, 2, 3, 4]
// console.log(removeElement(myArray, 2)); // Output: [1, 3, 4]

// //example of a function that can push and pop elements from an array
// function pushElement(arr, element) {
//   arr.push(element);
//   return arr;
// }

// function popElement(arr) {
//   arr.pop();
//   return arr;
// }

// let myArray2 = [1, 2, 3];
// console.log(pushElement(myArray2, 4)); // Output: [1, 2, 3, 4]
// console.log(popElement(myArray2)); // Output: [1, 2, 3]

// //exapmle
// let sdft17 = ["gabriel", "john", "michael" ]
// console.log(sdft17

// );// Output: ["gabriel", "john", "michael"]

// sdft17.push("sarah");
// console.log(sdft17); // Output: ["gabriel", "john", "michael", "sarah"]

// sdft17.pop();
// console.log(sdft17); // Output: ["gabriel", "john", "michael"]

// sdft17.unshift("sarah");
// console.log(sdft17); // Output: ["sarah", "gabriel", "john", "michael"]

// sdft17.shift();
// console.log(sdft17); // Output: ["gabriel", "john", "michael"]

// //figure our how to output sdft17 without repeating the code multiple times using indexing.
// console.log(sdft17[0]); // Output: "gabriel"
// console.log(sdft17[1]); // Output: "john"
// console.log(sdft17[2]); // Output: "michael"

// //or we can use a loop to output all the elements in the array without repeating the code multiple times.

// for (let i = 0; i < sdft17; i++) {
//   console.log(sdft17[i]);
// }

// //functions in arrays
// //example of a function that takes an array as a parameter and returns the length of the array:
// function arrayLength(arr) {
//   return arr.length;
// }

// console.log(arrayLength(sdft17)); // Output: 3

// //example of a function that takes an array as a parameter and returns the first element of the array:
// function firstElement(arr) {
//   return arr[0];
// }

// console.log(firstElement(sdft17)); // Output: "gabriel"

// //example of a function that takes an array as a parameter and returns the last element of the array:
// function lastElement(arr) {
//   return arr[arr.length - 1];
// }

// console.log(lastElement(sdft17)); // Output: "michael"

// //using splice in arrays
// //example of a function that takes an array as a parameter and removes the element at a specific index:
// function removeElementAtIndex(arr, index) {
//   arr.splice(index, 1);
//   return arr;
// }

// console.log(removeElementAtIndex(sdft17, 1)); // Output: ["gabriel", "michael"]

// //example of a function that takes an array as a parameter and adds an element at a specific index:
// function addElementAtIndex(arr, index, element) {
//   arr.splice(index, 0, element);
//   return arr;
// }

// console.log(addElementAtIndex(sdft17, 1, "john")); // Output: ["gabriel", "john", "michael"]  

// // print before splice
// console.log(sdft17); // Output: ["gabriel", "john", "michael"]

// //using splice to remove the element at index 1
// sdft17.splice(1, 1);
// console.log(sdft17); // Output: ["gabriel", "michael"]

// //using splice to add an element at index 1
// sdft17.splice(1, 0, "john");
// console.log(sdft17); // Output: ["gabriel", "john", "michael"]  


// //block of reusable code

// let a = 20
// let b = 30
// let total =  a + b
// console.log(total); // Output: 50

// //we can use a function to reuse the code for adding two numbers without repeating the code multiple times.

// function addition(num1, num2)  {
//   console.log(num1 + num2);
// }
// addition(20, 30); // Output: 50
// addition(10, 15); // Output: 25
// addition(5, 7); // Output: 12 

// function greetings() {
//   console.log("jambo");
// }

// let salamu = greetings; // reference
// let salamuResult = greetings(); // call (returns undefined here)

// let salamu1 = function () {
//   console.log("bonjour");
// };

// let salamu3 = () => {
//   console.log("good morning");
// };

// salamu1();
// salamu3();

// function addition(num1, num2) {
//   return num1 + num2; // console.log(num1 + num2);
// }

// let total1 = addition(20, 30); // Output: 50
// console.log("total is " + total1); // Output: 50

function greetings() {
  let name = "john";
  console.log("hey there " + name);
}
greetings(); // Output: hey there john


// LOOPS AND ITERATIONS

//There are many different types of loops, but they all have the same basic structure: they repeat a block of code until a certain condition is met.

//The most common types of loops include;

//1. For loops: These are used to repeat a block of code a specific number of times. The syntax for a for loop is as follows:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

//example of a for loop that outputs the numbers from 0 to 10:
// for (let i = 0; i <= 10; i++) {
//   console.log(i);  // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// }
//example of a for loop that outputs the numbers from 10 to 0:
// for (let i = 10; i >= 0; i--) {
//   console.log(i);  // Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
// }


//2. While loops: These are used to repeat a block of code as long as a certain condition is true. The syntax for a while loop is as follows:
// while (condition) {
//   // code to be executed
// }

//example of a while loop that outputs the numbers from 0 to 10:
// let i = 0;
// while (i <= 10) {
//   console.log(i);  // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//   i++;
// }
//example of a while loop that outputs n <  3:
// let n = 0;
// let x = 0;
// while (n < 3) {   //
//   n++;     // n = n + 1
//   x += n;  // x = x + n
// }
// console.log(x); // Output: 6 (1 + 2 + 3 = 6)

//Infinte loops are TO BE AVOIDED. Make sure the condition in a while loop eventually becomes false, otherwise the loop will run forever and crash your program.
//example of an infinite while loop:
// while (true) {
//   console.log("This loop will run forever!");
// }


//3. Do-while loops: These are similar to while loops, but they guarantee that the block of code will be executed at least once, even if the condition is false. The syntax for a do-while loop is as follows:
// do {
//   // code to be executed
// } while (condition);

//example of a do-while loop that outputs the numbers from 0 to 10:
// let i = 0;
// do {
//   console.log(i);  // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//   i++;
// } while (i <= 10);
//example of a do-while loop that outputs the numbers from 10 to 0:
// let j = 10;
// do {
//   console.log(j);  // Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
//   j--;
// } while (j >= 0);


//4. For-in loops: These are used to iterate over the properties of an object. The syntax for a for-in loop is as follows:
// for (variable in object) {
//   // code to be executed
// }

//5. For-of loops: These are used to iterate over the values of an iterable object, such as an array or a string. The syntax for a for-of loop is as follows:
// for (variable of iterable) {
//   // code to be executed
// }

//6. Break statement: This is used to exit a loop prematurely, before the condition is met. The syntax for a break statement is as follows:
// break;
// when you use break without a label, it terminates the innermost loop that contains it. 
// If you use break with a label, it terminates the loop that is labeled with that label. 
// For example:
// outerLoop: for (let i = 0; i < 5; i++) {
//   innerLoop: for (let j = 0; j < 5; j++) {
//     if (i === 2 && j === 2) {
//       break outerLoop; // This will break out of the outer loop, not just the inner loop.
//     }
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }
// In this example, when i is 2 and j is 2, the break statement will exit the outer loop, and the program will stop executing the loops entirely.


//7. Continue statement: This is used to skip the current iteration of a loop and move on to the next one. The syntax for a continue statement is as follows:
// continue;
//  it can be used in any type of loop (for, while, do-while, for-in, for-of) to skip the current iteration and move on to the next one.
// For example:
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue; // This will skip the current iteration if i is even.
//   }
//   console.log(i); // This will only log odd numbers: 1, 3, 5, 7, 9
// }

//while example in which the continue statement is used to skip the current iteration when n is less than 3:
// let n = 0;
// while (n < 3) {
//   n++;  //
//   console.log(n);  //
// }

// In this example, when n is 0, the continue statement will skip the rest of the loop and move on to the next iteration, which will increment n to 1. 
// When n is 1, the continue statement will again skip the rest of the loop and move on to the next iteration, which will increment n to 2. 
// When n is 2, the continue statement will again skip the rest of the loop and move on to the next iteration, which will increment n to 3. 
// At this point, the condition n < 3 will be false, and the loop will terminate. The output of this code will be:
// 1
// 2
// 3

// using continue statement with labels to skip the current iteration of an loop:
// outerLoop: for (let i = 0; i < 5; i++) {
//   innerLoop: for (let j = 0; j < 5; j++) {
//     if (i === 2 && j === 2) {
//       continue outerLoop; // This will skip the current iteration of the outer loop when i is 2 and j is 2.
//     }
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }

// In this example, when i is 2 and j is 2, the continue statement will skip the rest of the current iteration of the outer loop, and the program will move on to the next iteration of the outer loop, which will increment i to 3 and reset j to 0. 
// The output of this code will be all combinations of i and j from 0 to 4, except for the combination where i is 2 and j is 2.


//8. Nested loops: These are loops that are contained within other loops. They can be used to perform more complex iterations, such as iterating over a two-dimensional array. The syntax for nested loops is as follows:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
//   for (initialization; condition; increment/decrement) {
//     // code to be executed
//   }
// }

//9. Infinite loops: These are loops that never end, because the condition is always true. They can be useful in certain situations, such as when you want to create a server that listens for incoming requests, but they can also cause problems if they are not used carefully. The syntax for an infinite loop is as follows:
// while (true) {
//   // code to be executed
// }

//10. Labeled statements: These are used to label a block of code, which can be useful when you want to break out of multiple nested loops at once. The syntax for a labeled statement is as follows:
// label: {
//   // code to be executed
//   break label;
// }


//11. For-await-of loops: These are used to iterate over asynchronous iterables, such as streams or async generators. The syntax for a for-await-of loop is as follows:
// for await (variable of asyncIterable) {
//   // code to be executed
// }

