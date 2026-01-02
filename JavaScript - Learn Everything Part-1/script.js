/*

//chapter-1:Variables & Declarations
what is variable?
A variable is a named storage for data.It can hold different types of values such as numbers, strings, objects, etc. Variables allow you to store, retrieve, and manipulate data in your programs.

is var, let and const a datatype?
No, var is not a datatype. It is a keyword used to declare variables in JavaScript.

------------------------------------------------------------------

//declaration vs initialization
-->var 

var x; //declaration
initialization
x = 5; //initialization
var x = 20; //declaration + initialization

x = 10; //re-initialization (we can re-assign value to variable)

var x= 30; //we can re-declare var variable

->got added in window object
how you can access var variable from window object
console.log(window.x); in your browser console

->function scoped
example of function scoped

function outerFunction() {
    var a = 1;
    function innerFunction() {
        var b = 2;
    }
        console.log(a); //this will work
        console.log(b); // this will give error
        }
//because var variable is function scoped 
(only accessible within the function)

->not block scoped
code in which var variable is accessible outside the block
if (true) {
    var b = 2;
}
console.log(b); // Output: 2
//because var variable is not block scoped

Here is the rule for var:
It can leak out of if blocks or loops.
It cannot leak out of a function.

------------------------------------------------------------------

-->let 
let y; //declaration
y = 15; //initialization
let y = 30; //declaration + initialization
y = 25; //re-initialization
//let y = 35; //we cannot re-declare let variable   

//not added in window object
console.log(window.y); // Output: undefined

//block scoped
example of block scoped
if (true) { 
    let c = 3; 
    }
console.log(c); // ReferenceError: c is not defined
//because let variable is block scoped

Here is the rule for let:
It cannot leak out of if blocks or loops.
It cannot leak out of a function.

------------------------------------------------------------------

-->const
const z = 50; //declaration + initialization

//const x; this is also invalid because const variable must be initialized during declaration
//z = 60; //we cannot re-initialize const variable
//const z = 70; //we cannot re-declare const variable

//block scoped
if (true) { 
    const d = 4; 
    }           
console.log(d); // ReferenceError: d is not defined
//because const variable is block scoped
//not added in window object
console.log(window.z); // Output: undefined

//here is the rule for const:
//It cannot leak out of if blocks or loops.
//It cannot leak out of a function.

------------------------------------------------------------------
//template literal 
let name = "Himanshu";
let age = 21;   

//using template literal
let greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: My name is Himanshu and I am 21 years old.    

//Traditional way of string concatenation
let greeting2 = "My name is " + name + " and I am " + age + " years old.";
console.log(greeting2); // Output: My name is Himanshu and I am 21 years old.


-------------------------------------------------------------------
-->type of scope
1.Global Scope
 it can be accessed from anywhere in the code.
 example:
 var globalVar = "I am global"; 
console.log(globalVar); // Accessible here

function checkGlobalScope() {
    console.log(globalVar); // Accessible here too
}

2.Function Scope
it can be accessed only within the function where it is defined.
example:
function myFunction() {
    var functionVar = "I am function scoped";
    console.log(functionVar); // Accessible here
}       
myFunction();
console.log(functionVar); // Error: functionVar is not defined


3.Block Scope
it can be accessed only within the block (enclosed by curly braces {}) where it is defined.
example:
if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible here
}
console.log(blockVar); // Error: blockVar is not defined

------------------------------------------------------------------

-->temporal dead zone(TDZ)

this is for let and const variable
console.log(a);
this is not showing ReferenceError: a is not defined but showing ReferenceError: Cannot access 'a' before initialization
this happens because of compiler behavior
TDZ- ultna area jitna mein js ko pata hai ki variable exist karta hai but abhi tak initialize nahi hua hai



let a = 10;// a ka TDZ hai 137 to 144 line tak hai


this is example of TDZ var case
console.log(a); //undefined
this is showing undefined because var variable ka TDZ nahi hota hai

var a = 20;

------------------------------------------------------------------

-->hoisting
JavaScript prepares memory before running code.
It moves all declarations to the top — this is called hoisting.

->var is hoisted and set to undefined
->let and const are hoisted but not initialized — so accessing them early gives
ReferenceError

------------------------------------------------------------------

//chapter-2:Data Types in JavaScript

In JavaScript, every value has a type.
These types define what kind of data is being stored — a number, text, boolean, object, etc.

->Primitive Data Types
//copy karne pe value copy hota hai

1.Number
example:
let num = 42;

2.String
example:
let str = "Hello, World!";

3.Boolean
example:
let isTrue = true;

4.Undefined
example:
let undef;
//the variable is declared but not initialized, so its value is undefined.. its default value given by js engine

5.Null
example:
let emptyValue = null;
//there is nothing data for this variable for now so we used null


6.Symbol 
//future mein hum koi library use karenge ab is case mein un libraries mein kai bar kuc feilds hoti hai jinse similar hum bhi bana dete hai aur galti se hamari field us library ki field ko overwrite kar deti hai is problem ko solve karne ke liye hum symbol use karte hai
example:
let obj = {
    id: 123,
    name: 'John'
};

let u1 = Symbol('id');
obj[u1] = 456; // Adding a unique symbol property

console.log(obj); // Output: { id: 123, name: 'John', [Symbol(id)]: 456 } 

//use in future

7.BigInt
example:

let a =Number.MAX_SAFE_INTEGER;
console.log(a); // Output: 9007199254740991

a = a + 1;
console.log(a); // Output: 9007199254740992
a = a + 4;
console.log(a); // Output: 9007199254740996 (Incorrect due to precision loss)

a = BigInt(Number.MAX_SAFE_INTEGER);
//let a =9007199254740991n;
console.log(a); // Output: 9007199254740991n
;
a = a + 1n;
console.log(a); // Output: 9007199254740992n
a = a + 4n;
console.log(a); // Output: 9007199254740996n (Correct)


------------------------------------------------------------------


->Reference Data Types
//copy karne pe reference(address) copy hota hai
//jisme bhi bracket use hota hai wo reference data type hota hai
//agar refrence value me change karte hai to original value bhi change ho jati hai

1.Object
example:
let person = {
    name: "Alice",
    age: 30
};

let person2 = person; // Copying reference
person2.age = 31; // Modifying through the new reference
console.log(person.age); // Output: 31 (original object is affected)


2.Array
example:
let numbers = [1, 2, 3, 4, 5];

let numsCopy = numbers; // Copying reference
numsCopy.push(6);   // Modifying through the new reference      
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6] (original array is affected)


3.Function
example:
function greet() {
    console.log("Hello!");
}       
let greetCopy = greet; // Copying reference
greetCopy(); // Output: "Hello!" (original function is called)  

------------------------------------------------------------------

--> dynamic typing  
JavaScript is a dynamically typed language, which means that variables can hold values of any type, and the type can change at runtime.
example:
let data = 42;  // data is a Number
console.log(typeof data); // Output: "number"
data = "Hello"; // data is now a String
console.log(typeof data); // Output: "string"

------------------------------------------------------------------

-->typeof Operator
The typeof operator is used to determine the type of a variable or value in JavaScript.

typeof quirks:
console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)
console.log(typeof NaN); // Output: "number" (NaN stands for Not-a-Number, but its type is number)
console.log(typeof []); // Output: "object" (arrays are a special type of object)

------------------------------------------------------------------

-->type coercion
Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). 
example:
let result;
result = '5' + 10;
console.log(result); // Output: "510" (number 10 is coerced to string "10")

result = '5' - 2;
console.log(result); // Output: 3 (string '5' is coerced to number 5)   

------------------------------------------------------------------

-->truly and falsy values
In JavaScript, values can be classified as "truthy" or "falsy" based on how they evaluate in a boolean context.
Truthy Values:
Examples of truthy values include:
- "hello", "0", "false"
- 42, -3.14
- {}, []
- true
Falsy Values:
Examples of falsy values include:
- false
- 0
- ""
- null
- undefined
- NaN (Not-a-Number)
- document.all

note to check we can use !! operator
e.g.:
console.log(!!"hello"); // Output: true
console.log(!!0);       // Output: false
------------------------------------------------------------------

-->Operators

->Arithmetic Operators:
+ - * / % **(exponentiation)
e.g.:
let a = 10;
let b = 3;
console.log(a ** b); // Output: 1000 (10 to the power of 3)

->comparison Operators:
== === != !== > < >= <=
e.g.:
console.log(5 == '5'); // Output: true (loose equality, type coercion occurs)
console.log(5 === '5'); // Output: false (strict equality, no type coercion)

console.log(5 != '5'); // Output: false (loose inequality, type coercion occurs)
console.log(5 !== '5'); // Output: true (strict inequality, no type coercion)   

->Assignment Operators:
= += -= *= /= %= **=

Increment and Decrement Operators:
++ --
e.g.: pre-increment and post-increment
let count = 5;
console.log(++count); // Output: 6 (pre-increment: increments count, then returns the value)
console.log(count++); // Output: 6 (post-increment: returns the value, then increments count)
console.log(count);   // Output: 7 (count has been incremented)

example: pre-decrement and post-decrement
let count = 5;  
console.log(--count); // Output: 4 (pre-decrement: decrements count, then returns the value)
console.log(count--); // Output: 4 (post-decrement: returns the value, then decrements count)
console.log(count);   // Output: 3 (count has been decremented) 

example:
let n=5;
let result = n++ + ++n + n-- + --n;
console.log(result); //

Explanation:
Initial n = 5   
1. n++: Use 5, then n becomes 6
2. ++n: n becomes 7, use 7
3. n--: Use 7, then n becomes 6
4. --n: n becomes 5, use 5
Sum: 5 + 7 + 7 + 5 = 24 
console.log(result); // Output: 24     



->Logical Operators:
&& || !

->uniary operators:
~ (bitwise NOT)
~5 // converts 5 to binary and inverts all bits

+ (unary plus)
+"himanshu" // converts string to number if possible otherwise NaN
+"10" // converts string to number 10

- (unary minus)
-"10" // converts string to number -10

typeof ++ -- ! (already discussed)

->Ternary Operator
?:
e.g.:
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: "Yes"

let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log(grade); // Output: "B"

-------------------------------------------------------------   

-->typeof and instanceof Operators

instanceof operator is used to check whether an object(variable) is an instance of a specific class or constructor function.
example of both operators
let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"
console.log(arr instanceof Array); // Output: true
//variable instanceof class

//instance of were used to check reference data type only
function(){}, Object, Array, Date, RegExp, etc.

//Array should be in captial A because it is a class

------------------------------------------------------------------

-->control flow statements
-> Conditional Statements
- if
if(condition){
    //code to be executed if condition is true
}


- if...else
if(condition){
    //code to be executed if condition is true
}   else{
    //code to be executed if condition is false
}

- else if
if(condition1){
    //code to be executed if condition1 is true
}   else if(condition2){
    //code to be executed if condition2 is true
}   else{
    //code to be executed if both conditions are false
}

- switch
switch(expression){
    case value1:
        //code to be executed if expression matches value1
        break;
    case value2:
        //code to be executed if expression matches value2
        break;
    default:
        //code to be executed if expression doesn't match any case
        break;
}

-early return pattern

function returnsomething(value){
    if(!value){
        return value; //early return if value is falsy
    }   
    //code to be executed if value is truthy
    else{
        return value * 2;
    }
}

console.log(returnsomething(0)); // Output: 0
console.log(returnsomething(5)); // Output: 10
gh repo delete <your-username>/<repo-name> --confirm

-> Loops
- for
for(initialization; condition; increment/decrement){
    //code to be executed in each iteration
}
    e.g.:
for(let i=0; i<5; i++){
    console.log(i);
} output: 0 1 2 3 4
 
- while
while(condition){
    //code to be executed as long as condition is true
}   
    e.g.:
let i = 0;
while(i<5){
    console.log(i);
    i++;
} output: 0 1 2 3 4 

- do...while
do{
    //code to be executed at least once and then as long as condition is true
}   while(condition);   
    e.g.:
let i = 0;
do{
    console.log(i);
    i++;
}   while(i<5); output: 0 1 2 3 4


this two will be discussed later
- for...in
- for...of

--------------------------------------------------------------------------------------------------------
-->funtions
A function is a reusable block of code that performs a specific task. It allows you to encapsulate logic and execute it multiple times with different inputs.
it doesnt run until we call it unlike loops.

function declaration
function functionName(parameters){
    //code to be executed
    }
    
    function call
    functionName(arguments);
//function _newywar(){}//this is valid function name
    
//function statement vs function expression
Function statement:
function greet() {
    console.log("Hello!");
}   
Function Expression:
const greet = function() {
    console.log("Hello!");
};
//both can be called using greet();

//fat arrow function
const functionName = (parameters) => {
    //code to be executed
}
funtionName(arguments);

--------------------------------------------------------------------------

->arguments vs parameters
e.g.:
function add(a, b) { //a and b are parameters
    return a + b;
}
console.log(add(5, 10)); //5 and 10 are arguments

->default parameters
e.g.:
function greet(name = "Guest") { //default parameter
    console.log(`Hello, ${name}!`);
}   
greet(); // Output: "Hello, Guest!"
greet("Alice"); // Output: "Hello, Alice!"  

//when we done pass argument value of parameter will be default value
//NaN will come when we do arithmetic operation with undefined
------------------------------------------------------------------

-->rest operator in functions
jab arguments kai saare ho to humein utne hi parameters banane padenge, issey bachne  ke liye hum rest operator use karte hai ... function ke parameter space main laga to wo rest opertor hai.
e.g.:
function sum(...numbers) { //rest operator
 console.log(numbers); // Output: [1, 2, 3, 4, 5]
 let total = 0; 
    for (let num of numbers) {  
        total += num;
    }   
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

-----------------------------------------------------------------

-->return statement in functions
e.g.:
function multiply(a, b) {
    return a * b; //return statement
}

//multiply(5, 10) === 50
console.log(multiply(5, 10)); // Output: 50

------------------------------------------------------------------
-->first class functions
functions ko hum variables ki tarah treat kar sakte hai

1. Assigning functions to variables
const greet = function(name) {
    return `Hello, ${name}!`;
};
   greet("Himanshu"); // Output: "Hello, Himanshu!"

2. Passing functions as arguments to other functions
function performOperation(a, b, operation) {
    return operation(a, b);
}
const add = function(x, y) {
    return x + y;
}
console.log(performOperation(5, 10, add)); // Output: 15

3. Returning functions from other functions
function createMultiplier(factor) {
    return function(number) { //anonymous function
        return number * factor;
    };
} 
const double = createMultiplier(2);
console.log(double(5)); // Output: 10

in professional JavaScript, it is very common to leave these inner functions anonymous or use Arrow Functions (modern syntax) like this:

function createMultiplier(factor) {
    return (number) => number * factor; // Still anonymous!
}

//one more example
function abcd(val){
val();
}
abcd(function(){ //keep in mind no naming for this function
console.log("Hello World");
});

output: Hello World

----------------------------------------------------------------

-->higher order functions
wo function hota hai jo ki return kare function ya fir accept kare function as parameter 
e.g.:
above function abcd is higher order function because it accept function as parameter

above function createMultiplier(factor) is also higher order function because it return function

----------------------------------------------------------------

pure functions vs impure functions

A function is considered "pure" if it meets two strict rules:
1) Deterministic: Given the same input, it will always return the same output.
2) No Side Effects: It does not change anything outside of itself (like global variables, the DOM, or console logs).
e.g.:
function addPure(a, b) {
    return a + b;
}
console.log(addPure(2, 3)); // Always returns 5
console.log(addPure(2, 3)); // Always returns 5

->A function is "impure" if it violates either of the rules above.
1) Non-Deterministic: It might return different results even if you pass the same arguments (e.g., uses random numbers or time).
2) Has Side Effects: It modifies variables outside its scope, modifies the DOM, fetches data, or logs to the console.
e.g.:
let total = 0; // External state
function addToTotal(amount) {
    total = total + amount; // Side effect!
    return total;
}
console.log(addToTotal(5)); // Returns 5
console.log(addToTotal(5)); // Returns 10 (Different output for same input!)

another example is using math.random() function

----------------------------------------------------------------

-->closures
ek function jo return kare ek aur function aur return hone wala function humesha use karega parent function ka koi variable 
e.g.:
funtion abcd(){
    let count = 1;
return function(){
    console.log(count);
    count++;
}}
let myFunction = abcd();
myFunction(); // Output: 1
myFunction(); // Output: 2

-->lexical scope 
e.g.:
function abcd(){
let a =12;
function defg(){
    let b = 23;
    function xyz(){
        let c =34;
}}}
lexical scope of a is abcd, defg, xyz
lexical scope of b is defg, xyz
lexical scope of c is xyz

------------------------------------------------------------------
IIFE(Immediately Invoked Function Expression)
e.g.:
(function(){
console.log("Hello World");})()

//this function will run immediately after defining it

 --------------------------------------------------------------------------

-->hoisting in statement function vs expression function

->function statement hoisting
abcd(); // Output: "Function Statement Called"

function abcd() {
    console.log("Function Statement Called");
}
//function statement is hoisted completely

->function expression hoisting
//efgh(); // Error: efgh is not a function

const efgh = function() {
    console.log("Function Expression Called");
};
//function expression is not hoisted like function statement

--------------------------------------------------------------------------

good question
1) function outer(){
    let count =0;
    return function ()
    {
        count++;
        console.log(count);
    };
}
    const counter = outer();
    counter(); // Output: 1 
    counter(); // Output: 2

    explanation:
    1. The outer function is called, which initializes count to 0 and returns the inner function.
    2. The returned inner function is assigned to the variable counter.
    3. Each time counter() is called, it increments count by 1 and logs the updated value.

2) reusable discount calculator using HOF

funtion mainf(discount){
return function(price){
return price - (price * discount)/100;} 

const tenPercentDiscount = mainf(10);
const twentyPercentDiscount = mainf(20);

const price1 = tenPercentDiscount(1000); // Output: 900
const price2 = twentyPercentDiscount(1000); // Output: 800

3) build a counter using closure

function outer(){
    let count =0;
    return function(){
    count++;
    return count;
    }  }

    const counter = outer();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
    console.log(counter()); // Output: 3

    const anotherCounter = outer();
    console.log(anotherCounter()); // Output: 1

    explanation:
    1. The outer function initializes count to 0 and returns the inner function.
    2. Each time counter() is called, it increments and returns the count specific to that closure.
    3. anotherCounter() creates a new closure with its own count variable, independent of counter().

4) use IIFE to create a private variable
    (funtion(){
    let password = "secret123";
    console.log( password); // Output: secret123
    })();

    console.log(password); // Error: password is not defined


--------------------------------------------------------------------------

-->Arrays

//initialization of array
let marks = [85, 90, 78, 92, 88];

indexing in array
//index starts from 0
//marks[0] = 85
//marks[1] = 90 ans so on

console.log(marks[5]); // Output: undefined (index 5 does not exist

//modifying array elements
marks[2] = 80; // Changing the value at index 2
console.log(marks); // Output: [85, 90, 80, 92, 88]

->array methods
1.push()
e.g.:
let fruits = ["apple", "banana"];
fruits.push("orange"); // Adding "orange" to the end
console.log(fruits); // Output: ["apple", "banana", "orange"]

2.pop()
e.g.:
let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.pop(); // Removing the last element
console.log(removedFruit); // Output: "orange"
console.log(fruits); // Output: ["apple", "banana"]

3.shift()
e.g.:
let fruits = ["apple", "banana", "orange"];
let removedFruit = fruits.shift(); // Removing the first element
console.log(removedFruit); // Output: "apple"
console.log(fruits); // Output: ["banana", "orange"]

4.unshift()
e.g.:
let fruits = ["banana", "orange"];
fruits.unshift("apple"); // Adding "apple" to the beginning
console.log(fruits); // Output: ["apple", "banana", "orange"]

5. slice()
e.g.:
let numbers = [1, 2, 3, 4, 5];
let subArray = numbers.slice(1, 4); // Extracting elements from index 1 to 3
console.log(subArray); // Output: [2, 3, 4]

let subArray2 = numbers.slice(2,8); //if end index is greater than array length then it will take array length as end index
console.log(subArray2); // Output: [3, 4, 5]

6. splice()
e.g.:
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 10, 11); // Starting at index 2, remove 1 element and add 10 and 11
console.log(numbers); // Output: [1, 2, 10, 11, 4, 5]

let numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(3, 0, 20, 21); // Starting at index 3, remove 0 elements and add 20 and 21
console.log(numbers2); // Output: [1, 2, 3, 20, 21, 4, 5]

let numbers3 = [1, 2, 3, 4, 5];
numbers3.splice(1, 9); //if delete count is greater than available elements then it will delete all available elements from start index
console.log(numbers3); // Output: [1]

another way of using splice to add elements at end
let numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(numbers4.length, 0, 30, 31); // Adding 30 and 31 at the end
console.log(numbers4); // Output: [1, 2, 3, 4, 5, 30, 31]

7. reverse()
e.g.:
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

7. sort()
e.g.:
let numbers = [3, 1, 4, 2, 5];
numbers.sort((a, b) => a - b);  
numbers.sort(function(a,b){return a-b}); //ascending order

numbers.sort((a, b) => b - a);
//numbers.sort(function(a,b){return b-a}); //descending order

console.log(numbers); // Output: [1, 2, 3, 4, 5] ascending order
//console.log(numbers); // Output: [5, 4, 3, 2, 1] descending order

8. forEach()
e.g.:
let numbers = [1, 2, 3, 4, 5];  
numbers.forEach((num) => {
    console.log(num * 2);
}); // Output: 2 4 6 8 10
 
9.map()

//map likhte hi soch lo ki ek naya array banega. uski length original array jaisi hi hogi.vo har element pe jayega original array ka aur us element pe jo bhi operation karoge vo naya array mein add ho jayega.
e.g.:
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => {return num * 2});
console.log(doubled); // Output: [2, 4, 6, 8, 10]

//num me ek ek karke original array ke element jayenge aur unpe jo bhi operation karoge vo naya array mein add ho jayega.

//if we perform operation and it not return anything then undefined will be added in new array
let numbers2 = [1, 2, 3, 4, 5];
let doubled2 = numbers2.map((num) => {console.log(num * 2);});  
console.log(doubled2); // Output: [undefined, undefined, undefined, undefined, undefined]  

//new arry always have same length as original array.. other elemts get undefined if nothing is returned

10. filter()
e.g.:
let numbers = [1, 2, 3, 4, 5, 6]; 

let evenNumbers = numbers.filter((num) => { return num % 2 === 0; });
console.log(evenNumbers); // Output: [2, 4, 6]

11. reduce()
e.g.:
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

//accumulator is 0 because we have given 0 as initial value at end.. accumulator apni yaad rakhta hai.. aur return hone pe ho accumulator me store ho jata hai.. next iteration mein accumulator wahi se start hota hai

12.find()
e.g.:
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find((num) => { return num > 3; });
console.log(found); // Output: 4

//always return first matched element

13. some()
e.g.:
let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some((num) => { return num % 2 === 0; });
console.log(hasEven); // Output: true
//return true if at least one element match the condition

14.every()
e.g.:
let numbers = [2, 4, 6, 8]; 
let allEven = numbers.every((num) => { return num % 2 === 0; });
console.log(allEven); // Output: true
//return true if all elements match the condition
//if one is not matching then it will return false

------------------------------------------------------------------

->destructuring in arrays
let arr = [10, 20, 30, 40, 50];
let [a, b, ,c] = arr; //array destructuring
console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 40

->spread operator in arrays
let arr1 = [1, 2, 3, 4, 5,6,7,8,9];
let arr2 = arr1; //reference copy 
//if we change arr2 then arr1 will also change because both are pointing to same reference

//this way we made copy of array using spread operator
let arr2=[...arr1,10,11]; //spread operator
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

--------------------------------------------------------------------------
-->Objects

let obj= {
    name: "Himanshu", //key:value pair/structure
    age: 21,
    isStudent: true 
    location: {
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "traveling", "coding"]
};
//accessing object properties
obj.name; // Output: "Himanshu"
obj['age']; // Output: 21

//how to acces using variable as key
let isStudentKey = 'isStudent';
obj[isStudentKey]; // Output: true
obj.isStuentkey; // Output: undefined

//yaad rakhna . key baad exact match karna chahiye case sensitive hota hai par agar [] mein likho to variable ke andar jo bhi value hogi wo key ban jayegi.

nesting and deep access    
obj.location.city; // Output: "New York"

-->object destructuring
let {name, age, location: {city}} = obj;
console.log(name); // Output: "Himanshu"
console.log(age); // Output: 21
console.log(city); // Output: "New York"

other way of destructuring
let {city, country} = obj.location;
console.log(city); // Output: "New York"
console.log(country); // Output: "USA"

-->looping through objects
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
// Output:
// name: Himanshu
// age: 21
// isStudent: true
// location: [object Object]
// hobbies: reading,traveling,coding        

how location is printed as [object Object] because it is nested object 

how to access nested object
for (let key in obj.location) {
    console.log(`${key}: ${obj.location[key]}`);
}

->Objects.keys(), Objects.values(), Objects.entries()
e.g.:
let keys = Object.keys(obj);
console.log(keys); // Output: ["name", "age", "isStudent", "location", "hobbies"]

let values = Object.values(obj);
console.log(values); // Output: ["Himanshu", 21, true, {city: "New York", country: "USA"}, ["reading", "traveling", "coding"]]

let entries = Object.entries(obj);
console.log(entries); 
// Output: [["name", "Himanshu"], ["age", 21], ["isStudent", true], ["location", {city: "New York", country: "USA"}], ["hobbies", ["reading", "traveling", "coding"]]]

------------------------------------------------------------------

-->copying objects

->spread operator
let obj2 = {...obj, profession: "Student"};
console.log(obj2); 
// Output: {name: "Himanshu", age: 21, isStudent: true, location: {city: "New York", country: "USA"}, hobbies: ["reading", "traveling", "coding"], profession: "Student"

->Object.assign()
let obj3 = Object.assign({}, obj, { profession: "Student" });
console.log(obj3); 
// Output: {name: "Himanshu", age: 21, isStudent: true, location: {city: "New York", country: "USA"}, hobbies: ["reading", "traveling", "coding"], profession: "Student"

-> Deep Copying
let obj4 = JSON.parse(JSON.stringify(obj));
console.log(obj4); 
// Output: {name: "Himanshu", age: 21, isStudent: true, location: {city: "New York", country: "USA"}, hobbies: ["reading", "traveling", "coding"]

why need of deep copying?
let obj5 = {...obj};
obj5.location.city = "Los Angeles";
console.log(obj.location.city); // Output: "Los Angeles" (original object is affected)
//because location is nested object so shallow copy will not work here.

------------------------------------------------------------------

-->Optional Chaining (?.)
let user = {
    name: "Himanshu",
    address: {
        city: "New York",
        zip: "10001"
    }
};
console.log(user.address?.city); // Output: "New York"
console.log(user.contact?.phone); // Output: undefined (no error thrown)
console.log(user.contact.phone); // Error: Cannot read property 'phone' of undefined

-->computer property names in objects
let key = "age";
let person = {
    name: "Himanshu",
    [key]: 21 //computed property name
};
console.log(person.age); // Output: 21

------------------------------------------------------------------

good question
1) can an object key be a number or boolean?
Yes, in JavaScript, object keys can be numbers or booleans. However, they are automatically converted to strings. For example:
let obj = {
    1: "one",
    2: "two",
    true: "yes",
    false: "no"
};
console.log(obj[1]); // Output: "one"
console.log(obj[true]); // Output: "yes"

2) access this
let obj = {
"first-name": "Himanshu",
"last-name": "Rai"
};
console.log(obj["first-name"]); // Output: "Himanshu"
console.log(obj.first-name); // Output: NaN (because it is treated as obj.first - name

3)Destructure the key "first-name" as a variable called firstName.
const user = {
  "first-name": "Harsh",
};

let { "first-name": firstName } = user; // Destructuring with alias
console.log(firstName); // Output: "Harsh"

4)Use Object.entries() to print all key-value pairs as:
 title: JavaScript
 duration: 4 weeks
 const course = {
  title: "JavaScript",
  duration: "4 weeks",
};

Object.entries(course).forEach(function (val) {
  console.log(val[0] + ": " + val[1]);
});

-----------------------------------done_with_part-1---------------------------------------














    */
