- What is Prototype Chaining?
  It is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language like C++ and Java.

- What is the purpose of the array slice method?
  The slice() method returns the selected elements in an array as a new array object.

  - It selects the elements starting at the given start argument and ends at the given optional end argument without including the last element.
  - If you omit the second argument then it selects till the end.

- What is the purpose of the array splice method?
  The splice() method is used to either adds or removes items from an array and then returns the removed item.

- What is the difference between == and === operators?
- What is a first class function?
  First class functions means when functions in that language are treated like any other variable.
  Ex : a function can be pass as an argument to other functions, can be returned by another function and can be assigned as a value to variable.

- What is a first Order function?
  First-order function is a function that doesn't accept another function as an argument and doesn't return a function as its return value.
  Ex: const firstOrder = () => console.log("I am a first order function");

- What is a higher order function?
- What is the purpose of the `let` keyword?

  - The let declares a block scope local variable. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used.
  - Whereas variables declared with the var keyword used to define a variable globally or locally to an entire function regardless of block scope.

- What is the difference between let and var?
  Var :

  - It is been available from the beginning of JS.
  - It has function scope.
  - Variables will be hoisted.

    let:

    - Introduces as part of ES6.
    - It has block scope.
    - Hoisted but not initialised.
