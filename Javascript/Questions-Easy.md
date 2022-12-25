# Javascript Interview Questions ( Theory Based )

- What was the First Name of Javascript?
  Mocha

- What was the year when JS launched?
  1995

- What are the different data types present in Javascript?
  There are 2 types of data types in js : Primitive and Non-Primitive

1. Primitive➖
   var name = “Mayank” // String
   var number = 200; // Number
   var twoPhoneNumber= 90071992512345998822n; // BigInt
   var truth = false; // Boolean
   var dob; // undefined
   var date = null; // null
   var place = Symbol(”Delhi”); // Symbol { Introduced in ES6 }

[Symbol - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

1. Non-Primitive➖
   var Student = { // Object
   firstName: ‘ram’,
   lastName: null,
   class: 10
   };

var gender = [’male’,’female’,’trans’,’others’]; // Arrays
var map = new Set([”a”,”b”,”c”]); // Sets { Introduced in ES6 }

- What are the different Loops in Javascript?

There are 5 kinds of loops available in JS.

1. 3 are old ones :
   for loop: loops through a block of code a number of times  
   for(let i=0;i<5;i++){
   console.log(i);
   }

while loop: loops through while a specific condition is true

do while loop : loops through but first time it runs directly and after that checks on condition

    1. 2 are New Loops :
    const person = {
         fName: “John”,
         lName: “Doe”,
         age: 25
    };

    for in ⇒ For………in loops through the properties of Object.
    for(let x in person){
       console.log(x);
    } // Output : fName , lName

    for of ⇒ For………of loops through the value of Object.

      for(let x of person){
         console.log(x);
      } // Output : John , Doe

- What are conditional Statements in JS?

1. if -else
2. Switch case
3. Ternary Operator

- What is an Immediately Invoked Function in Javascript?

An **IIFE** (Immediately Invoked Function Expression) is a javascript function that runs as soon as it is defined. Normal functions are defined somewhere and invoked somewhere else but incase of IIFE functions , they are defined and called at the same place.

Normal Function :-

function(){

}

function();

IIFE function :-

(function(){

})();

1. Can be used for instant loading scripts or events , which should run at the very start.
2. Any variables or memory allocation done inside IIFE is cleared as soon as the function is over and it does not mix up with global namespace of js.

Advantages➖ { Usecases }

1. Avoid polluting the global namespace - garbage collection.
2. Async Support is also present in the IIFE Functions.
3. We can make private, public, protected variables also by making another IIFE inside the IIFE function.

- Explain the ‘this’ keyword in javascript?

this points to itself in which every container it is in.

Example :

const person = {

firstName: “Mayank”,

lastName: “Kumar”,

id: 5566,

fullName: function(){

return this.firstName + “ “ + this.lastName;

}

};

person.fullName();

Here this is person in this [case.](http://case.So) So basically here this refers

- What is array of Objects and Make a Sample Array of Objects.

- Explain implicit type coercion in Javascript.

- Is Javascript statically typed or a dynamically typed language?

- Explain the passed by value and passed by reference.

- What are Object Prototypes?

- What is Variable Hosting?

- What is memoization?

- What is the use of constructor function in Javascript?

- What are Primitive and Non-Primitive? Explain the difference between them

- What the ES6 features?

- What is Math Object in JS.

- What is Interpolation in JS?

- How and Why arrays are called Objects in Javascript

- Explain the String Methods in Javascript

- Explain the Array Methods in Javascript

- What are Truthy and Falsey Values?

- Explain Coercion in Javascript.

- Explain the Operator \*\* in Javascript.

- Explain for of in Javascript?
- Explain the Object and make a sample Object in Javascript.
- Explain the Date Object in Javascript.
- Explain the Arrow Function and Compare its normal function.
- How can we send multiple Arguments in Javascript?
- What is the Nature of Javascript?
- What are Function Scope and Block Scope?

- What are Synchronous and Asynchronous in javascript?

- What is the difference between Dom and Virtual Dom?

- Is Javascript statically typed or dynamically typed language?

- What difference between ‘==’ and ‘===’ in Javascript?

- What is NaN property in Javascript?

- What is an Immediately Invoked Function in Javascript?

- Explain Higher Order Functions in Javascript.

- Explain call(),apply(),bind().

- What is Hoisting in Javascript?

- What is undeclared ( not defined ) and undefined in javascript?

- What is ‘this’ in javascript?

- What difference between var, let, and const?

- What are Dom and Virtual Dom?

- Explain Closures in Javascript.

- What are promises in Javascript and How to use promises in JS? Also tell the use of Promises

- Explain Scope and Scope Chain in Javascript.

- What is DOM?

- What is a rest and spread Operator?

- What is Temporal Dead Zone?

- Explain the Prototypes and Prototypal Inheritance.

- What are Callbacks in Javascript and why do we use them?

- What is a Garbage collector in Javascript.
