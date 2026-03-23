// JavaScript Guide
// The JavaScript Guide shows you how to use JavaScript and gives an overview of the language. If you need exhaustive information about a language feature, have a look at the JavaScript reference.

// This Guide is divided into the following chapters.

// In this article
// Introduction
// Grammar and types
// Control flow and error handling
// Loops and iteration
// Functions
// Expressions and operators
// Numbers and strings
// Representing dates & times
// Regular expressions
// Indexed collections
// Keyed collections
// Working with objects
// Using classes
// Promises
// Typed arrays
// Iterators and generators
// Resource management
// Internationalization
// JavaScript modules
// Advanced topics

// Introduction
// Overview: Introduction

// About this guide
// About JavaScript
// JavaScript and Java
// ECMAScript
// Tools
// What's next

// Grammar and types
// Overview: Grammar and types

// Basic syntax & comments
// Declarations
// Variable scope
// Variable hoisting
// Data structures and types
// Literals

// Control flow and error handling
// Overview: Control flow and error handling

// if...else
// switch
// try/catch/throw
// Error objects

// Loops and iteration
// Overview: Loops and iteration

// for
// while
// do...while
// continue
// break
// for...in
// for...of

// Functions
// Overview: Functions

// Defining functions
// Calling functions
// Function scopes and closures
// Arguments & parameters
// Arrow functions

// Expressions and operators
// Overview: Expressions and operators

// Assignment & Comparisons
// Arithmetic operators
// Bitwise & logical operators
// Conditional (ternary) operator

// Numbers and strings
// Overview: Numbers and strings

// Numbers
// Number object
// Math object
// Strings
// String object
// Template literals

// Representing dates & times
// Overview: Representing dates & times

// Date object
// Regular expressions
// Overview: Regular expressions

// Creating a regular expression
// Writing a regular expression pattern
// Assertions
// Character classes
// Groups and backreferences
// Quantifiers

// Indexed collections
// Overview: Indexed collections

// Keyed collections
// Overview: Keyed collections

// Map
// WeakMap
// Set
// WeakSet

// Working with objects
// Overview: Working with objects

// Objects and properties
// Creating objects
// Defining methods
// Getter and setter

// Using classes
// Overview: Using classes

// Declaring a class
// Various class features
// Extends and inheritance
// Why classes?

// Promises
// Overview: Promises

// Guarantees
// Chaining
// Error handling
// Composition
// Timing

// Typed arrays
// Overview: Typed arrays

// Iterators and generators
// Overview: Iterators and generators

// Iterators
// Iterables
// Generators

// Resource management
// Overview: JavaScript resource management

// The using and await using declarations
// The DisposableStack and AsyncDisposableStack objects
// Error handling

// Internationalization
// Overview: Internationalization

// Date and time formatting
// Number formatting
// Collation

// JavaScript modules
// Overview: JavaScript modules

// Exporting
// Importing
// Default exports
// Renaming features
// Aggregating modules
// Dynamic module loading
// Advanced topics

// After you have learned all fundamental features of JavaScript, you can explore some more niche features, or dive deeper into the language's mechanisms and concepts.

// Language overview
// Data structures
// Enumerability and ownership of properties
// Inheritance and the prototype chain
// Equality comparisons and sameness
// Closures
// Meta programming
// Memory management


/*GRAMMAR AND TYPES
Javascript is case sensitive, which means that variables, function names, and other identifiers must be typed with consistent capitalization. For example, the variable name "myVariable" is different from "myvariable" or "MYVARIABLE".

Variable names can contain letters, digits, underscores, and dollar signs, but they must begin with a letter, underscore, or dollar sign. For example, "myVariable", "_myVariable", and "$myVariable" are all valid variable names, but "1myVariable" is not.
The source text of JavaScript script gets scanned from left to right, and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments, or whitespace. 
(Spaces, tabs, and newline characters are considered whitespace.)

comments are ignored by JavaScript and are used to explain code or to prevent execution of code. There are two types of comments in JavaScript: single-line comments and multi-line comments.
Single-line comments start with two forward slashes (//) and continue until the end of the line. For example:
// This is a single-line comment

Multi-line comments start with a forward slash followed by an asterisk (/*) and end with an asterisk followed by a forward slash:
/* This is a multi-line comment
   that spans multiple lines */

// Comments can be used to explain code, to make it more readable, or to temporarily disable code during development.
// It's a good practice to use comments to clarify the purpose of your code and to make it easier for others (or yourself in the future) to understand what the code is doing.
// Comments can also be used to provide information about the author of the code, the date it was created, or any other relevant information that might be helpful for future reference.

//#! /usr/bin/env node

// This file is part of MDN's JavaScript documentation. It is not intended to be run as a standalone script, but rather to be included in the documentation as an example of JavaScript code.

// The code in this file is meant to demonstrate various features of the JavaScript language, such as loops, functions, and array manipulation. It is not meant to be a complete program or application, but rather a collection of examples that illustrate different concepts and techniques in JavaScript.

// If you want to run this code, you can copy and paste it into a JavaScript environment, such as a web browser's console or a Node.js environment. However, keep in mind that some of the code may not work as intended if it relies on specific context or variables that are not defined in the standalone environment.

// The code in this file is provided for educational purposes only, and is not intended to be used in production environments without proper testing and validation. Always make sure to test your code thoroughly before using it in a real application, and be aware of any potential security risks or performance issues that may arise from using certain features or techniques in JavaScript.

//DECLARATIONS
// In JavaScript, you can declare variables using the var, let, or const keywords. Each of these keywords has different scoping rules and behaviors.

// The "var" keyword is used to declare variables that are function-scoped. This means that a variable declared with var is accessible within the function in which it is declared,
// and any nested functions. However, if a variable is declared with var outside of any function, it becomes a global variable and is accessible throughout the entire program.

// The "let" keyword is used to declare variables that are block-scoped. This means that a variable declared with let is only accessible within the block (enclosed by curly braces {}) in which it is declared.
// This can help prevent accidental variable shadowing and can make your code easier to read and maintain.

// The "const" keyword is used to declare variables that are block-scoped and cannot be reassigned after they are initialized. 
// This means that once you assign a value to a const variable, you cannot change that value later in your code. However, if the value assigned to a const variable is an object or an array, 
// you can still modify the properties of that object or the elements of that array, but you cannot reassign the variable itself to a new object or array.

//VARIABLES
// In JavaScript, variables are used to store data values. You can declare a variable using the var, let, or const keywords, as mentioned earlier.
//A javaScript variable can hold any type of data, including numbers, strings, booleans, objects, arrays, and even functions. 
// The type of data that a variable holds can change dynamically during the execution of the program.
// For example, you can declare a variable and assign it a number value, and then later reassign it to a string value:

let myVariable = 42; // myVariable is now a number
console.log(myVariable); // Output: 42

myVariable = "Hello, world!"; // myVariable is now a string
console.log(myVariable); // Output: "Hello, world!"

// In this example, the variable myVariable is first assigned the number value 42, and then later reassigned to the string value "Hello, world!". 
// This demonstrates the dynamic typing feature of JavaScript, which allows variables to hold values of different types without needing to declare a specific type for the variable.

// It's important to note that while JavaScript allows for dynamic typing, it can also lead to unexpected behavior if you're not careful with how you use variables. 
// For example, if you try to perform an operation on a variable that holds a value of a different type than what you expect, you may encounter errors or unexpected results. 
// Therefore, it's a good practice to be mindful of the types of values your variables hold and to use appropriate type checking and error handling in your code to avoid potential issues.

//VARIABLE SCOPE
// In JavaScript, variable scope refers to the accessibility of variables in different parts of your code. 
// There are three main types of variable scope in JavaScript: global scope, function scope, and block scope.

// Global scope: Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the program, including inside functions and blocks.

let globalVariable = "I am a global variable";

function accessGlobalVariable() {
  console.log(globalVariable); // Output: "I am a global variable"
}

accessGlobalVariable(); // Output: "I am a global variable"

// Function scope: Variables declared inside a function have function scope. They can only be accessed within that function and are not accessible outside of it.

function myFunction() {
  let functionVariable = "I am a function variable";
  console.log(functionVariable); // Output: "I am a function variable"
}

myFunction(); // Output: "I am a function variable"
// console.log(functionVariable); // This will cause an error because functionVariable is not accessible outside of myFunction

// Block scope: Variables declared with let or const inside a block (enclosed by curly braces {}) have block scope. They can only be accessed within that block and are not accessible outside of it.

if (true) {
  let blockVariable = "I am a block variable";
  console.log(blockVariable); // Output: "I am a block variable"
}

// console.log(blockVariable); // This will cause an error because blockVariable is not accessible outside of the if block

// Understanding variable scope is important for writing clean and maintainable code, as it helps prevent unintended side effects and makes it easier to manage the accessibility of variables in your program.

//VARIABLE HOISTING
// In JavaScript, variable hoisting is a behavior where variable declarations are moved to the top of their containing scope during the compilation phase. 
// This means that you can use a variable before it has been declared in your code, and it will not result in an error. However, only the declaration is hoisted, not the initialization.

// For example:

console.log(hoistedVariable); // Output: undefined
var hoistedVariable = "I am hoisted";

// In this example, the variable hoistedVariable is declared using var, and its declaration is hoisted to the top of the scope. 
// However, the initialization (assignment of the value "I am hoisted") is not hoisted, so when we try to access hoistedVariable before it has been initialized, 
// it returns undefined instead of causing an error. If we were to use let or const instead of var, we would get a ReferenceError because let and const declarations are not hoisted in the same way as var.

// console.log(notHoistedVariable); // This will cause a ReferenceError
// let notHoistedVariable = "I am not hoisted";

// console.log(alsoNotHoistedVariable); // This will cause a ReferenceError
// const alsoNotHoistedVariable = "I am also not hoisted";

// It's important to be aware of variable hoisting when writing JavaScript code, as it can lead to unexpected behavior if you're not careful with how you declare and initialize your variables. 
// To avoid confusion, it's generally recommended to declare all your variables at the top of their scope and to use let or const instead of var to prevent unintended hoisting.

//GLOBAL VARIABLES
// In JavaScript, a global variable is a variable that is declared outside of any function or block and is accessible from anywhere in the program. 
// Global variables are created by declaring a variable with var, let, or const at the top level of your code (outside of any function or block).

// For example:

var globalVar = "I am a global variable";
let anotherGlobalVar = "I am another global variable";
const yetAnotherGlobalVar = "I am yet another global variable";

function accessGlobalVars() {
  console.log(globalVar); // Output: "I am a global variable"
  console.log(anotherGlobalVar); // Output: "I am another global variable"
  console.log(yetAnotherGlobalVar); // Output: "I am yet another global variable"
}

accessGlobalVars(); // Output: "I am a global variable", "I am another global variable", "I am yet another global variable"

// Global variables can be accessed and modified from any part of the program, including inside functions and blocks. However, it's generally considered good practice to minimize the use of global variables in your code, as they can lead to unintended side effects and make it harder to manage the state of your program. 
// Instead, it's often better to use local variables within functions and blocks to encapsulate data and avoid potential conflicts with other parts of your code.

// It's also worth noting that in a browser environment, global variables declared with var become properties of the global window object, while those declared with let or const do not. 
// This means that you can access var-declared global variables using window.variableName, but you cannot do the same for let or const-declared global variables.

// console.log(window.globalVar); // Output: "I am a global variable"
// console.log(window.anotherGlobalVar); // Output: undefined
// console.log(window.yetAnotherGlobalVar); // Output: undefined

// Understanding global variables and their implications is important for writing clean and maintainable JavaScript code, as it helps you manage the state of your program and avoid unintended side effects caused by global variable usage.

//CONSTANTS
// In JavaScript, a constant is a variable that cannot be reassigned after it has been initialized. 
// You can declare a constant using the const keyword. Once you assign a value to a const variable, you cannot change that value later in your code. 
// However, if the value assigned to a const variable is an object or an array, you can still modify the properties of that object or the elements of that array, but you cannot reassign the variable itself to a new object or array.

// For example:

const myConstant = "I am a constant";
console.log(myConstant); // Output: "I am a constant"

// myConstant = "Trying to change the constant"; // This will cause an error because you cannot reassign a const variable

const myObject = { name: "Alice", age: 30 };
console.log(myObject); // Output: { name: "Alice", age: 30 }

myObject.name = "Bob"; // This is allowed because we are modifying the properties of the object, not reassigning the variable
console.log(myObject); // Output: { name: "Bob", age: 30 }

// myObject = { name: "Charlie", age: 25 }; // This will cause an error because you cannot reassign a const variable

// Using const can help you write more predictable and maintainable code, as it signals to other developers (or to yourself in the future) that a variable should not be reassigned. 
// It can also help prevent accidental reassignment of variables that are meant to be constant throughout your program. 
// Therefore, it's generally recommended to use const for variables that should not be reassigned, and to use let for variables that may need to be reassigned later in your code.

// In summary, constants in JavaScript are variables that cannot be reassigned after they have been initialized. 
// They are declared using the const keyword, and while you cannot reassign a const variable to a new value, you can still modify the properties of an object or the elements of an array that is assigned to a const variable. 
// Using const can help improve the readability and maintainability of your code by signaling that a variable should not be reassigned. 

//DATA STRUCTURES AND TYPES
// In JavaScript, there are several built-in data structures and types that you can use to store and manipulate data. 
// The most common data types in JavaScript include:

// 1. Primitive types: These include string, number, boolean, null, undefined, bigint, and symbol. 
// Primitive types are immutable, meaning that their values cannot be changed after they are created.

// 2. Objects: Objects are collections of key-value pairs and can be used to store more complex data. 
// They can contain properties (which are key-value pairs) and methods (which are functions that operate on the object).

// 3. Arrays: Arrays are ordered lists of values and can hold any type of data, including other arrays and objects. 
// They have a variety of built-in methods for manipulating the elements they contain.

// 4. Functions: Functions are reusable blocks of code that can be defined and called to perform specific tasks. 
// They can also be treated as first-class citizens in JavaScript, meaning they can be assigned to variables, passed as arguments to other functions, and returned from functions.

// 5. Maps and Sets: Maps are collections of key-value pairs where the keys can be of any type, while Sets are collections of unique values. 
// Both Maps and Sets have their own methods for adding, removing, and iterating over their elements.

// Understanding these data structures and types is essential for writing effective JavaScript code, as they provide the foundation for storing and manipulating data in your programs. 
// Each data structure has its own characteristics and use cases, so it's important to choose the right one based on the specific needs of your application.

// For example, if you need to store a list of items in a specific order, an array would be a good choice. If you need to store key-value pairs where the keys can be of any type, 
// a Map would be more appropriate. 
// If you need to ensure that a collection of values contains only unique items, a Set would be the best option. 
// By understanding the different data structures and types available in JavaScript, you can make informed decisions about how to structure your data and write more efficient and maintainable code.

//Although these data types are relatively few, they enable you to perform useful operations with your applications. Functions are the other fundamental elements of the language. 
//While functions are technically a kind of object, you can think of objects as named containers for values, and functions as procedures that your script can perform.

//DATA TYPE CONVERSION
// In JavaScript, data type conversion (also known as type coercion) is the process of converting a value from one data type to another. 
// JavaScript is a dynamically typed language, which means that it can automatically convert values between different types when necessary. 
// This can happen in various situations, such as when you perform operations on values of different types or when you use certain functions that expect specific types of arguments.

// For example, if you try to add a number and a string together, JavaScript will convert the number to a string and concatenate them:

let result = 5 + "10";
console.log(result); // Output: "510"

// In this case, the number 5 is converted to the string "5", and then it is concatenated with the string "10" to produce the result "510".

// JavaScript also provides built-in functions for explicitly converting values between different types. 
// For example, you can use the Number() function to convert a value to a number, the String() function to convert a value to a string, and the Boolean() function to convert a value to a boolean:

let num = Number("42");
console.log(num); // Output: 42

let str = String(123);
console.log(str); // Output: "123"

let bool = Boolean(0);
console.log(bool); // Output: false

//Numbers and the '+ operator' can also be used to perform type conversion.
let num1 = 5;
let num2 = "10";
let sum = num1 + num2; // The number 5 is converted to the string "5" and concatenated with "10"
console.log(sum); // Output: "510"

//with all others operators, JavaScript will try to convert the values to numbers before performing the operation. For example:

let difference = 5 - "2"; // The string "2" is converted to the number 2 before subtraction
console.log(difference); // Output: 3

let product = 5 * "3"; // The string "3" is converted to the number 3 before multiplication
console.log(product); // Output: 15

let quotient = 10 / "2"; // The string "2" is converted to the number 2 before division
console.log(quotient); // Output: 5

//converting strings to numbers can be useful when you want to perform mathematical operations on user input, which is often received as strings.
// For example, if you have an input field where users enter their age, you might want to convert that input from a string to a number before performing calculations or comparisons:

let ageInput = "30"; // User input as a string
let age = Number(ageInput); // Convert the string to a number
console.log(age); // Output: 30

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// In this example, we convert the ageInput from a string to a number using the Number() function before comparing it to 18. 
// This allows us to perform the comparison correctly and determine whether the user is an adult or a minor based on their age input.

//parseInt() and parseFloat() are also commonly used functions for converting strings to numbers, especially when dealing with user input that may contain non-numeric characters.

let integerInput = "42px";
let floatInput = "3.14abc";

let parsedInteger = parseInt(integerInput); // This will parse the integer part of the string
console.log(parsedInteger); // Output: 42

   //the best practice for parseInt is to always incule radix parameter to specify the base of the number system you are working with, 
   // to avoid unexpected results when parsing numbers that may have leading zeros or other formatting issues.

let parsedIntegerWithRadix = parseInt(integerInput, 10); // This will parse the integer part of the string using base 10
console.log(parsedIntegerWithRadix); // Output: 42

let parsedFloat = parseFloat(floatInput); // This will parse the floating-point number from the string
console.log(parsedFloat); // Output: 3.14

// These functions are useful for extracting numeric values from strings that may contain additional characters, such as units or formatting. 
// However, it's important to note that if the string does not start with a valid number, both parseInt() and parseFloat() will return NaN (Not-a-Number), 
// so you should always check for this case when using these functions.

//Number() and String() functions can also be used for type conversion, but they behave differently than parseInt() and parseFloat().
// For example, if you use Number() to convert a string that contains non-numeric characters, it will return NaN:

let invalidNumber = Number("abc");
console.log(invalidNumber); // Output: NaN

// On the other hand, parseInt() and parseFloat() will try to parse as much of the string as possible until they encounter a non-numeric character:

let partialNumber = parseInt("123abc");
console.log(partialNumber); // Output: 123

//An alternative way to convert a string to a number is to use the unary plus operator (+), which can be a concise way to perform type conversion:

let stringNumber = "1.1" + "1.1"; // This will concatenate the two strings to "1.11.1"
console.log(stringNumber); // Output: "1.11.1"
let convertedNumber = (+"1.1") + (+"1.1"); // This will convert the strings to numbers and then add them together
console.log(convertedNumber); // Output: 2.2

// Understanding data type conversion is important for writing effective JavaScript code, as it can help you avoid unexpected results and ensure that your operations are performed on the correct types of values. 
// It's also a good practice to be explicit about type conversions in your code to improve readability and maintainability, rather than relying on implicit type coercion that may lead to confusion or bugs.

//LITERALS
// In JavaScript, literals are fixed values that are directly written in the code. They represent data that is not computed or derived from any expression. 
// There are several types of literals in JavaScript, including:


// 1. String literals: These are sequences of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). 
// For example: 'Hello, world!', "JavaScript is great!", `This is a template literal.`
//you should use string literals unless you speciffically need to use a string object, which is created using the String() constructor.

//tagged templates are a special type of template literal that allows you to parse template literals with a function.
// For example:

function tag(strings, ...values) {
    console.log(strings); // Output: ["Hello, ", "!"]
    console.log(values); // Output: ["world"]
    return "Tagged template result";
}

let taggedResult = tag`Hello, ${"world"}!`;
console.log(taggedResult); // Output: "Tagged template result"

// In this example, the tag function is called with the template literal `Hello, ${"world"}!`.
// The strings parameter receives an array of the literal parts of the template, while the values parameter receives the interpolated values.
// The tag function can then process the strings and values as needed and return a result, which in this case is "Tagged template result".

//Using special characters in strings
// the following table lists the special characters that can be used in javascript strings and their corresponding escape sequences:

// Character    Escape Sequence
// Newline      \n
// Carriage Return \r
// Tab           \t
// Backslash     \\
// Single Quote or Apostrophe  \'
// Double Quote  \"
// Backtick      \'
// Form Feed       \f
// Vertical Tab    \v
// Null Character  \0
// \xxx (where xxx is a three-digit octal number)  Represents the character with the specified octal code
// \xXX (where XX is a two-digit hexadecimal number) Represents the character with the specified hexadecimal code
// \uXXXX (where XXXX is a four-digit hexadecimal number) Represents the Unicode character with the specified code point
// \u{X...X} (where X...X is a hexadecimal number of any length) Represents the Unicode character with the specified code point

// These escape sequences allow you to include special characters in your strings that would otherwise be difficult to represent directly. 
// For example, if you want to include a newline character in a string, you can use the \n escape sequence:

let stringWithNewline = "Hello,\nworld!";
console.log(stringWithNewline);
// Output:
// Hello,
// world!

// Similarly, if you want to include a tab character, you can use the \t escape sequence:

let stringWithTab = "Hello,\tworld!";
console.log(stringWithTab);
// Output:
// Hello,   world!

// Understanding how to use literals and escape sequences in JavaScript is important for working with strings and other data types effectively in your code. 
// It allows you to represent fixed values directly in your code and to include special characters when needed, making your code more readable and maintainable.

//Escaping characters
// In JavaScript, you can use the backslash (\) as an escape character to include special characters in your strings.
// For example, if you want to include a double quote (") in a string that is enclosed in double quotes, you can escape it with a backslash:
let stringWithDoubleQuote = "She said, \"Hello!\"";
console.log(stringWithDoubleQuote); // Output: She said, "Hello!" 

// Similarly, if you want to include a single quote (') in a string that is enclosed in single quotes, you can escape it with a backslash:
let stringWithSingleQuote = 'He said, \'Hello!\'';
console.log(stringWithSingleQuote); // Output: He said, 'Hello!' 



// 2. Numeric literals: These represent numbers and can be written in various formats, such as decimal (e.g., 42), hexadecimal (e.g., 0x2A), octal (e.g., 0o52), and binary (e.g., 0b101010).
//javascript numeric literals can also include decimal points for floating-point numbers (e.g., 3.14) and can use exponential notation (e.g., 1e6 for 1,000,000).


 // A.integer literals and BigInt literals.
//They are also part of numeric literals. Integer literals are whole numbers without a decimal point, 
//while BigInt literals are used to represent integers that are larger than the maximum safe integer in JavaScript (2^53 - 1) and are denoted by appending 'n' to the end of the number (e.g., 9007199254740991n).
//They can be wirtten in decimal(base 10), hexadecimal(base 16), octal(base 8), or binary formats(base 2), just like regular numeric literals. 
//For example:

    //A decimal integer literal is a sequence of digits without a leading 0 (zero).
    // A leading 0 (zero) on an integer literal, or a leading 0o (or 0O) indicates it is in octal. Octal integer literals can include only the digits 0 – 7.
    // A leading 0x (or 0X) indicates a hexadecimal integer literal. Hexadecimal integers can include digits (0 – 9) and the letters a – f and A – F. (The case of a character does not change its value. Therefore: 0xa = 0xA = 10 and 0xf = 0xF = 15.)
    // A leading 0b (or 0B) indicates a binary integer literal. Binary integer literals can only include the digits 0 and 1.
    // A trailing n suffix on an integer literal indicates a BigInt literal. The BigInt literal can use any of the above bases. Note that leading-zero octal syntax like 0123n is not allowed, but 0o123n is fine.
// Some examples of integer literals are:

// 0, 117, 123456789123456789n             (decimal, base 10)
// 015, 0001, 0o777777777777n              (octal, base 8)
// 0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
// 0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)

 // B.floating-point literals.
// They are a sequence of digits with a decimal point, or a sequence of digits followed by an exponent part.
// For example: 3.14, 0.001, 1e6, 2.5e-3

// a floating-point literal can have the following parts:

// 1. An optional integer part, which is a sequence of digits (e.g., 3 in 3.14).
// 2. A decimal point (.) that separates the integer part from the fractional part.
// 3. An optional fractional part, which is a sequence of digits following the decimal point (e.g., 14 in 3.14).
// 4. An optional exponent part, which consists of an "e" or "E" followed by an optional sign (+ or -) and a sequence of digits (e.g., e6 in 1e6).

// Some examples of floating-point literals are:

// 3.14, 0.001, 1e6, 2.5e-3, .5, 5., 0.1e+2


// 3. Boolean literals: These represent the logical values true and false.
// For example: true, false (NOTE: Dont confuse  the primitive boolean values true and false with the true and false values of the Boolean object, which are not the same. 
// The Boolean object is a wrapper around the primitive boolean values and can be created using the Boolean() constructor.
// For example:

let primitiveTrue = true;
let primitiveFalse = false;

let booleanObjectTrue = new Boolean(true);
let booleanObjectFalse = new Boolean(false);

console.log(primitiveTrue); // Output: true
console.log(primitiveFalse); // Output: false
console.log(booleanObjectTrue); // Output: [Boolean: true]
console.log(booleanObjectFalse); // Output: [Boolean: false]    



// 4. Null literal: This represents the absence of any value and is denoted by null.


// 5. Undefined literal: This represents a variable that has been declared but has not been assigned a value, and is denoted by undefined.


// 6. Object literals: These are used to create objects using a syntax that consists of key-value pairs enclosed in curly braces ({ }). 
// For example: { name: "Alice", age: 30 }
// Object literals can also include methods, which are functions that operate on the object. For example:

let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(person); // Output: { name: "Alice", age: 30, greet: [Function: greet] }
person.greet(); // Output: "Hello, my name is Alice"

// In this example, we create an object literal representing a person with properties name and age, and a method greet that logs a greeting message to the console.

//The following is an example of an object literal. The first element of the car object defines a property, myCar, and assigns to it a new string, "Saturn";
//the second element, the getCar property, is immediately assigned the result of invoking the function (carTypes("Honda")); the third element, the special property, 
//uses an existing variable (sales).
//For example:

const sales = "Toyota";  // This is an existing variable that will be used in the object literal

function carTypes(name) {  // This is a function that will be called when the getCar property is assigned
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;  // This function checks if the name is "Honda" and returns it, otherwise it returns a message saying that the car is not sold
}

const car = {  // This is the object literal that defines the car object with three properties
  myCar: "Saturn",  // This property is assigned a string literal "Saturn"
  getCar: carTypes("Honda"),  // This property is assigned the result of calling the carTypes function with the argument "Honda"
  special: sales  // This property is assigned the value of the existing variable sales, which is "Toyota"
};

console.log(car); // Output: { myCar: "Saturn", getCar: "Honda", special: "Toyota" } 

//Additionally, you can use a numeric or string literal for the name of a property or nest an object inside another object. For example:

const nestedObject = {
  "property with spaces": "This is a property with spaces in its name",
  nested: {
    innerProperty: "This is a nested object"
  }
};

console.log(nestedObject); // Output: { "property with spaces": "This is a property with spaces in its name", nested: { innerProperty: "This is a nested object" } }    

const car = { manyCars:{ a: "Saab", b: "Jeep", 7: "BMW" } };

console.log(car.manyCars.b); // Output: "Jeep"
console.log(car.manyCars[7]); // Output: "BMW"

// In this example, we create an object literal with a property that has spaces in its name, and we also nest another object inside the main object. 
// We can access the nested properties using dot notation or bracket notation, depending on the syntax of the property names.

// Object literals are a powerful and flexible way to create objects in JavaScript, allowing you to define properties and methods in a clear and concise manner. 
// They are commonly used for creating simple data structures, organizing related data, and defining objects with specific behaviors through methods.

//Enhanced object literals, introduced in ECMAScript 2015 (ES6), provide additional syntax for defining object properties and methods in a more concise way. 
// For example, you can use shorthand property names when the property name is the same as the variable name:

let name = "Alice";
let age = 30;

const person = {
  name, // This is equivalent to name: name
  age   // This is equivalent to age: age
};

console.log(person); // Output: { name: "Alice", age: 30 }

// You can also define methods using a more concise syntax:

const personWithMethod = {
  name: "Bob",
  greet() { // This is equivalent to greet: function() { ... }
    console.log("Hello, my name is " + this.name);
  }
};

console.log(personWithMethod); // Output: { name: "Bob", greet: [Function: greet] }
personWithMethod.greet(); // Output: "Hello, my name is Bob"

// These enhancements to object literals make it easier and more efficient to create objects with properties and methods in JavaScript.



// 7. Array literals: These are used to create arrays using a syntax that consists of a list of values enclosed in square brackets ([ ]). 
// For example: [1, 2, 3, "four", true]
//when you use an array literal, you can include any type of value within the array, including other arrays and objects.
// For example: [1, "two", { name: "Alice" }, [3, 4]]
// This array contains a number, a string, an object, and another array as its elements.
// Array literals are a convenient way to create arrays with predefined values, and they can be used in various contexts, such as when initializing variables, passing arguments to functions, or returning values from functions.
//An arrayy literal creates a new array object every time the literal is evaluated. This means that if you use the same array literal in multiple places in your code, each instance will be a separate array object with its own reference in memory.
// For example:

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];

console.log(array1 === array2); // Output: false
// In this example, array1 and array2 are created using the same array literal, but they are different objects in memory, so they are not strictly equal (===).
// However, if you assign the same array literal to two different variables, they will reference the same array object in memory:

let array3 = [1, 2, 3];
let array4 = array3;

console.log(array3 === array4); // Output: true
// In this case, array3 and array4 reference the same array object in memory, so they are strictly equal (===).
// It's important to be aware of this behavior when working with array literals, as it can affect how you manage and manipulate arrays in your code.

//extra commas in array literals are ignored, which means that you can include a trailing comma after the last element in an array literal without causing any issues.
// For example:

let myArray = [1, 2, 3,];
console.log(myArray); // Output: [1, 2, 3]
// In this example, the trailing comma after the last element (3) is ignored by JavaScript, and the array is created with the values [1, 2, 3] without any errors. 
// This can be useful for maintaining cleaner code and making it easier to add or remove elements from the array in the future without worrying about syntax errors caused by missing or extra commas.

//if you put a comma without a value in an array literal, it creates an empty slot in the array, which is different from having an undefined value.
// For example:

let arrayWithEmptySlot = [1, , 3];
console.log(arrayWithEmptySlot); // Output: [1, <1 empty slot>, 3]
console.log(arrayWithEmptySlot[1]); // Output: undefined
// In this example, the array literal [1, , 3] creates an array with three elements, where the second element is an empty slot. 
// When we access arrayWithEmptySlot[1], it returns undefined because there is no value assigned to that index, but it is important to note that this is different from having an explicit undefined value in the array. 
// An empty slot means that the index exists but has no value, while an undefined value means that the index exists and has been explicitly assigned the value undefined.

//However, when writing your own code, you should explicitly declare the missing elements as undefined, or at least insert a comment to highlight its absence. 
// Doing this increases your code's clarity and maintainability.
// For example:

let myArrayWithUndefined = [1, undefined, 3];
console.log(myArrayWithUndefined); // Output: [1, undefined, 3]
// In this example, we explicitly declare the second element of the array as undefined, which makes it clear to anyone reading the code that this is intentional and not an accidental omission. 
// This can help improve the readability and maintainability of your code by providing clear information about the structure and contents of your arrays.

//for example:

let myArrayWithComment = [1, /* missing element */ , 3];
console.log(myArrayWithComment); // Output: [1, <1 empty slot>, 3]
// In this example, we include a comment to indicate that there is a missing element in the array. 
// This can help clarify the intent of the code and make it easier for others (or yourself in the future) to understand why there is an empty slot in the array.



// 8. Regular expression literals(RegExp): These are used to create regular expressions using a syntax that consists of a pattern enclosed in forward slashes (/ /). 
// For example: /ab+c/ matches strings that contain "a" followed by one or more "b" characters and then "c".
//for example;

const re = /ab+c/;
console.log(re); // Output: /ab+c/
// In this example, we create a regular expression literal that matches strings containing "a" followed by one or more "b" characters and then "c".

// Regular expression literals can also include flags that modify the behavior of the regular expression. 
// For example: /ab+c/i is a case-insensitive regular expression that matches "abc", "aBc", "abC", etc.

// Regular expression literals are a convenient way to create regular expressions in JavaScript, and they can be used for tasks such as pattern matching, searching, and replacing text in strings. 
// They provide a powerful and flexible syntax for working with strings and can be used in various contexts, such as when validating user input, parsing data, or manipulating strings in your code.

// Literals are a fundamental part of JavaScript and are used to represent data in your code. 
// They can be assigned to variables, passed as arguments to functions, and used in expressions to perform various operations. 
// Understanding the different types of literals and how to use them effectively is essential for writing clean and efficient JavaScript code.



//                //String
                  const name = "Gabriel";  // This is a string literal
                  const greeting = `Hello, ${name}!`;  // Template literal with string interpolation. 
                                                       // String interpolation allows you to embed expressions (like variables) inside a string literal, 
                                                       // and the expression will be evaluated and included in the resulting string. 
                                                       // ${...} is the syntax used for string interpolation in template literals.
                  console.log(greeting); // Output: "Hello, Gabriel!"

                      // We can use + as a string operator to concatenate strings together. For example:

                  const firstName = "Gabriel";
                  const middleName = "Ngige";
                  const lastName = "Kimotho";
                  const fullName = firstName + " " + middleName + " " + lastName; // Concatenating strings using the + operator
                  console.log(fullName); // Output: "Gabriel Ngige Kimotho"

                      // or with interpolation:

                  const fullNameWithInterpolation = `${firstName} ${middleName} ${lastName}`; // Concatenating strings using template literals and interpolation
                  console.log(fullNameWithInterpolation); // Output: "Gabriel Ngige Kimotho"


//                //Number
                  const FavNum = 2;  // This is a number literal
                  console.log(FavNum); // Output: 2

//                //Boolean
                  const ilovecoding = true;  // <= This is a boolean literal
                  console.log(ilovecoding); // Output: true
                  const isJavaScriptFun = false;  // <= This is another boolean literal
                  console.log(isJavaScriptFun); // Output: false

//                //Null
                  const blackhole = null;  // This is a null literal
                  console.log(blackhole); // Output: null

//                //Undefined
                  let myName;  // This variable is declared but not initialized, so it is undefined
                  console.log(myName); // Output: undefined

//                //Object
                  const person = { name: "Gabriel", age: 24, hairColor: "black" };  // This is an object literal
                  console.log(person); // Output: { name: "Gabriel", age: 24, hairColor: "black" }

//                //Array
                  const numArray = [1, 2, 3, 4, 5];
                    console.log(numArray); // Output: [1, 2, 3, 4, 5]
                  const fruits = ["apple", "banana", "cherry"]; 
                    console.log(fruits); // Output: ["apple", "banana", "cherry"]

//                //Regular Expression
                  const regex = /hello/i;  // This is a regular expression literal that matches "hello" case-insensitively
                  console.log(regex); // Output: /hello/i

// In this code snippet, we demonstrate the use of various literals in JavaScript, including string literals, number literals, boolean literals, null literals, undefined variables, object literals, array literals, and regular expression literals. 
// Each literal is assigned to a variable and then logged to the console to show its value. 
// This illustrates how different types of data can be represented using literals in JavaScript.

// <= this is a comment, which is not executed as part of the code. I t is used to provide explanations or notes about the code for better readability and understanding.
// => this is not a comment, but rather an arrow function syntax used in JavaScript to define functions in a more concise way.
// For example:

const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// In this example, we define an arrow function called add that takes two parameters (a and b) and returns their sum. 
// The arrow function syntax allows us to write the function in a more concise way compared to traditional function expressions. 
// We then call the add function with the arguments 2 and 3, and log the result to the console, which outputs 5.

// In summary, literals are fixed values that are directly written in the code to represent data.
// They can be of various types, such as strings, numbers, booleans, null, undefined, objects, arrays, and regular expressions. 
// Understanding how to use literals effectively is essential for writing clear and efficient JavaScript code. 
// Additionally, comments (using // for single-line comments and /* ... */ for multi-line comments) are used to provide explanations and improve the readability of the code. 
// Arrow functions (using =>) are a concise syntax for defining functions in JavaScript.


//CONTROL FLOW AND ERROR HANDLING
// Control flow in JavaScript refers to the order in which the code is executed. 
// JavaScript provides several control flow statements that allow you to control the execution of your code based on certain conditions or to repeat certain blocks of code. 
// Some of the most common control flow statements in JavaScript include:

// A. Block statements: These are used to group multiple statements together. They are enclosed in curly braces ({ }). For example:

if (true) {
  console.log("This is a block statement.");
  console.log("It allows you to group multiple statements together.");
}

// In this example, the two console.log statements are grouped together in a block statement that is executed when the condition (true) is met.
// Block statements are often used in conjunction with control flow statements like if, for, while, etc., 
// to define the scope of the code that should be executed based on certain conditions or iterations.


// B. Conditional statements: These include if...else, else if, else statements and switch statements that allow you to execute different blocks of code based on certain conditions. For example:

let number = 10;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// In this example, we use an if statement to check if the number is greater than 0, an else if statement to check if it is less than 0,
// and an else statement to handle the case where the number is exactly 0. 
// Depending on the value of the number variable, the appropriate block of code will be executed, and a message will be logged to the console indicating whether the number is positive, negative, or zero.

//the following values evaluate to false (also known as "falsy" values)
// false
// 0 (zero)
// -0 (negative zero)
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN (Not-a-Number)

// All other values- including all objects (including empty objects and arrays) and all non-empty strings- evaluate to true (also known as "truthy" values) when passed to a conditional statement. 
// For example:

if (0) {
  console.log("This will not be logged because 0 is falsy.");
} else {
  console.log("This will be logged because 0 is falsy.");
}

if ("") {
  console.log("This will not be logged because an empty string is falsy.");
} else {
  console.log("This will be logged because an empty string is falsy.");
}

if (null) {
  console.log("This will not be logged because null is falsy.");
} else {
  console.log("This will be logged because null is falsy.");
}

if (undefined) {
  console.log("This will not be logged because undefined is falsy.");
} else {
  console.log("This will be logged because undefined is falsy.");
}

if (NaN) {
  console.log("This will not be logged because NaN is falsy.");
} else {
  console.log("This will be logged because NaN is falsy.");
}

// In these examples, we demonstrate how different falsy values (0, empty string, null, undefined, NaN) evaluate to false in conditional statements, and the corresponding else blocks are executed to log messages indicating that these values are falsy. 
// Understanding which values are truthy and falsy is important for writing effective control flow in JavaScript and avoiding unintended behavior in your code.

// Switch statements are another type of conditional statement that allows you to execute different blocks of code based on the value of a variable or expression.
// For example:

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  default:
    console.log("It's another day of the week.");
}

// In this example, we use a switch statement to check the value of the day variable and execute the corresponding block of code based on its value. 
// If day is "Monday", it will log "Today is Monday." to the console. If day is "Tuesday", it will log "Today is Tuesday.", and so on. 
// The default case is executed if none of the specified cases match the value of day, logging "It's another day of the week." to the console.

// Switch statements can be a cleaner and more efficient way to handle multiple conditions compared to using multiple if...else if statements, especially when you have a large number of cases to evaluate.

//break statements are used in switch statements to prevent fall-through, which is when the code continues to execute the next case even if a match has been found.
// For example:

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break; // This break statement prevents fall-through to the next case
  case "banana":
    console.log("This is a banana.");
    break;
  default:
    console.log("This is some other fruit.");
}

// In this example, if the fruit variable is "apple", it will log "This is an apple." to the console and then the break statement will prevent the code from executing the next case (banana) or the default case. 
// If we were to omit the break statement, it would result in fall-through, and both the "This is an apple." and "This is a banana." messages would be logged, which is not the intended behavior in this scenario.


// C. Looping statements: These include for, while, and do...while loops that allow you to repeat a block of code multiple times based on certain conditions. For example:

for (let i = 0; i < 5; i++) {
  console.log("This is iteration number " + i);
}

// In this example, we use a for loop to repeat the block of code that logs the iteration number to the console. 
// The loop starts with i initialized to 0, and it continues to execute as long as i is less than 5, incrementing i by 1 in each iteration. 
// This results in the block of code being executed five times, logging the iteration number from 0 to 4.
// You can also use a while loop to achieve the same result:

let j = 0;
while (j < 5) {
  console.log("This is iteration number " + j);
  j++;
}

// In this example, we use a while loop to repeat the block of code that logs the iteration number to the console. 
// The loop continues to execute as long as j is less than 5, and we manually increment j by 1 in each iteration. 
// This also results in the block of code being executed five times, logging the iteration number from 0 to 4.

// A do...while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once, even if the condition is false:

let k = 0;
do {
  console.log("This is iteration number " + k);
  k++;
} while (k < 5);

// In this example, we use a do...while loop to repeat the block of code that logs the iteration number to the console. 
// The block of code is executed first, and then the condition (k < 5) is checked. 
// This means that even if k were initialized to a value greater than or equal to 5, the block of code would still execute at least once before the loop terminates.

// Looping statements are essential for performing repetitive tasks in JavaScript, such as iterating over arrays, processing data, or implementing algorithms that require multiple iterations. 
// Understanding how to use different types of loops effectively can help you write more efficient and readable code.


// D. Error handling statements: These include try...catch and throw statements that allow you to handle errors and exceptions in your code gracefully. For example:

try {
  // Code that may throw an error
  let result = someFunctionThatMightThrow();
  console.log("Result: " + result);
} catch (error) {
  // Code to handle the error
  console.error("An error occurred: " + error.message);
}

// In this example, we use a try...catch statement to handle potential errors that may occur when calling the someFunctionThatMightThrow function. 
// If an error is thrown within the try block, the catch block will be executed, allowing us to handle the error gracefully by logging an error message to the console. 
// This prevents the error from crashing the entire program and allows us to provide feedback about what went wrong.

// You can also use the throw statement to create your own custom errors:

function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative.");
  }
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  console.error("Validation error: " + error.message);
}

// In this example, the validateAge function checks if the age parameter is negative. If it is, it throws a new Error with a custom message. 
// When we call validateAge(-5), it throws an error, which is caught in the catch block, allowing us to log a validation error message to the console.

//the finally block can be used in conjunction with try...catch to execute code that should run regardless of whether an error was thrown or not.
// For example:

try {
  // Code that may throw an error
  let result = someFunctionThatMightThrow();
  console.log("Result: " + result);
} catch (error) {
  // Code to handle the error
  console.error("An error occurred: " + error.message);
} finally {
  // Code that will always be executed, regardless of whether an error was thrown or not
  console.log("This will always be executed.");
}

// In this example, the finally block contains code that will be executed after the try and catch blocks, regardless of whether an error was thrown or not. 
// This can be useful for performing cleanup tasks, releasing resources, or executing any code that should run regardless of the outcome of the try block.

//Nesting try...catch statements is also possible, allowing you to handle errors at different levels of your code.
// For example:

try {
  // Code that may throw an error
  try {
    let result = someFunctionThatMightThrow();
    console.log("Result: " + result);
  } catch (innerError) {
    console.error("An error occurred in the inner block: " + innerError.message);
    throw innerError; // Re-throw the error to be caught by the outer catch block
  }
} catch (outerError) {
  console.error("An error occurred in the outer block: " + outerError.message);
}

// In this example, we have a nested try...catch statement. If an error occurs in the inner try block, it is caught by the inner catch block, which logs an error message and then re-throws the error. 
// The re-thrown error is then caught by the outer catch block, allowing us to handle it at a higher level in the code. 
// This approach can be useful for managing errors in complex code structures and providing more specific error handling based on where the error occurred.

//Utilizing Error Objects can provide more detailed information about the error, such as the name of the error, the message, and the stack trace.
// For example:

try {
  // Code that may throw an error
  let result = someFunctionThatMightThrow();
  console.log("Result: " + result);
} catch (error) {
  console.error("An error occurred: " + error.message);
  console.error("Error name: " + error.name);
  console.error("Stack trace: " + error.stack);
}

// In this example, we catch the error and log not only the error message but also the name of the error and the stack trace. 
// This additional information can be invaluable for debugging and understanding the context in which the error occurred, allowing you to identify and fix issues in your code more effectively.

// Error handling statements are crucial for writing robust and resilient JavaScript code, as they allow you to manage and respond to errors in a controlled manner, improving the user experience and preventing unexpected crashes.
// In summary, control flow statements in JavaScript allow you to manage the execution of your code based on conditions and iterations, while error handling statements enable you to handle exceptions gracefully.



//Let's summarize the key points about literals, control flow, and error handling in JavaScript:

// 1. Literals are fixed values that are directly written in the code to represent data. They can be of various types, such as strings, numbers, booleans, null, undefined, objects, arrays, and regular expressions.
// 2. Control flow statements allow you to control the execution of your code based on certain conditions or to repeat certain blocks of code. 
//     Common control flow statements include block statements (if, for, while), conditional statements (if...else, else if, else, switch), and looping statements (for, while, do...while).
// 3. Error handling statements allow you to handle errors and exceptions in your code gracefully. 
//     Common error handling statements include try...catch and throw, which enable you to manage errors without crashing your program.
// 4. Understanding how to use literals effectively can help you represent data in a clear and concise way in your code.
// 5. Mastering control flow statements is essential for writing efficient and readable code that can make decisions and perform repetitive tasks.
// 6. Proper error handling is crucial for creating robust applications that can handle unexpected situations without crashing, providing a better user experience.
//