// //FUNCTIONS.

// //A function is a block of code that performs a specific task. It can be reused multiple times throughout a program, 
// // which helps to reduce code duplication and improve readability. Functions can take parameters (inputs) and return values (outputs). 
// // They are fundamental building blocks in programming and are used to organize code into manageable sections.

// //A function can be defined using the function keyword, followed by the function name, parentheses for parameters, and curly braces for the function body.
// //Parameters are optional, and a function can have zero or more parameters. The function body contains the code that will be executed when the function is called.
// //parameters are placeholders for values that will be passed to the function when its called.
// //so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.
// //This is because parameters are passed by value, meaning that a copy of the value is created and used within the function. 
// // Therefore, any changes made to the parameter within the function do not affect the original value outside of the function. 
// // If you want to modify the original value, you would need to return the modified value from the function and assign it back to the variable outside of the function.

// //example of a function that takes parameters and returns a value:

// function add(a, b) {
//   return a + b;
// }

// let result = add(5, 3);
// console.log(result); // Output: 8

// //example of a function that modifies a parameter but does not affect the original value outside of the function:

// function modifyValue(x) {
//   x = x + 1;
//   return x;
// }

// let originalValue = 10;
// let modifiedValue = modifyValue(originalValue);
// console.log(originalValue); // Output: 10 (original value is unchanged)
// console.log(modifiedValue); // Output: 11 (modified value is returned from the function)


// //when you pass an object or an array to a function, you are passing a reference to that object or array. This means that if you modify the object or array within the function, the changes will be reflected globally and in the code which called that function.
// //This is because the reference to the object or array is passed, rather than a copy of the value. 
// // Therefore, any changes made to the object or array within the function will affect the original object or array outside of the function. 
// // If you want to avoid modifying the original object or array, you can create a copy of it within the function and modify the copy instead.

// //example of passing an object and array to a function:

// function modifyArray(arr) {
//   arr.push("new element");
// }

// let myArray = ["element1", "element2"];
// modifyArray(myArray);
// console.log(myArray); // Output: ["element1", "element2", "new element"]

// function modifyObject(obj) {
//   obj.newProperty = "new value";
// }

// let myObject = { property1: "value1", property2: "value2" };
// modifyObject(myObject);
// console.log(myObject); // Output: { property1: "value1", property2: "value2", newProperty: "new value" }


// //function declaration vs function expression:

// //A function declaration is a way to define a function using the function keyword, followed by the function name, parentheses for parameters, and curly braces for the function body. 
// //Function declarations are hoisted, meaning that they can be called before they are defined in the code.

// function declaredFunction() {
//   console.log("This is a function declaration.");
// }

// declaredFunction(); // Output: "This is a function declaration."

// //A function expression is a way to define a function by assigning it to a variable. Function expressions can be anonymous (without a name) or named. 
// //Function expressions are not hoisted, meaning that they cannot be called before they are defined in the code.

// let expressedFunction = function() {
//   console.log("This is a function expression.");
// };

// expressedFunction(); // Output: "This is a function expression."

// //function declaration and expression can be nested ,which forms a scope chain. A function can access variables and parameters of its parent function, and this is known as closure.

// function outerFunction() {
//   let outerVariable = "I am from the outer function.";
  
//   function innerFunction() {
//     console.log(outerVariable); // Accessing variable from the outer function
//   }
  
//   innerFunction(); // Output: "I am from the outer function."
// }

// outerFunction();

//other example of nested functions and closure:

// function addNumbers(a, b) {
//   function sum() {
//     return a + b; // Accessing parameters from the outer function
//   }
//     return sum(); // Calling the inner function to get the result
// }

// let result = addNumbers(5, 10);
// console.log(result); // Output: 15

// function calculation(a, b) {
//   function multiply() {
//     return a * b; // Accessing parameters from the outer function
//   }
  
//   function divide() {
//     return a / b; // Accessing parameters from the outer function
//   }

//   function sum() {
//     return a + b; // Accessing parameters from the outer function
//   }

//   function subtraction() {
//     return a - b; // Accessing parameters from the outer function
//   }

//   return { multiply, divide, sum, subtraction }; // Returning an object containing the inner functions
// }

// let operations = calculation(10, 5);
// console.log(operations.multiply()); // Output: 50
// console.log(operations.divide());   // Output: 2
// console.log(operations.sum());      // Output: 15
// console.log(operations.subtraction()); // Output: 5

//Anonymous functions

//An anonymous function is a function that does not have a name. It is often used as a callback function or as an argument to another function.

//Example of an anonymous function used as a callback:

// setTimeout(function() {
//   console.log("This is an anonymous function used as a callback.");
// }, 1000);

//Example of an anonymous function used as an argument to another function:

// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map(function(num) {
//   return num * num; // This is an anonymous function that squares each number in the array
// });

// // console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// //example of an anonymous function

// const greetings = function(name) {
//   return `Hello, ${name}!`;
// };

// console.log(greetings("GABRIEL")); // Output: "Hello, GABRIEL!"


//Arrow functions

//Arrow functions are a more concise syntax for writing function expressions. They are defined using the arrow (=>) syntax and do not have their own this, arguments, or super keywords. 
// Arrow functions are often used for short, simple functions and can be especially useful when working with higher-order functions like map, filter, and reduce.

//Example of an arrow function:

const add = (a, b) => {
  return a + b;
};

console.log(add(5, 10)); // Output: 15

function calculate(a, b) {
  const multiply = (x, y) => x * y; // Arrow function for multiplication
  const divide = (x, y) => x / y;   // Arrow function for division
  const sum = (x, y) => x + y;      // Arrow function for addition
  const subtraction = (x, y) => x - y; // Arrow function for subtraction

  return { multiply, divide, sum, subtraction }; // Returning an object containing the arrow functions
}

let operations = calculate(10, 5);
console.log(operations.multiply(10, 5)); // Output: 50
console.log(operations.divide(10, 5));   // Output: 2
console.log(operations.sum(10, 5));      // Output: 15
console.log(operations.subtraction(10, 5)); // Output: 5

//In summary, function declarations are hoisted and can be called before they are defined, while function expressions are not hoisted and cannot be called before they are defined. 
// Both function declarations and function expressions can be used to define functions in JavaScript, and the choice between them often depends on personal preference and coding style.
