//Hoisting in JavaScript is a behavior in which variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in the code.

/*-------------------------------------------------------------------------------
                    4 Important Points about Hoisting:
-------------------------------------------------------------------------------*/


// 1. Variable Declarations: Only the declarations are hoisted, not the initializations. For example:

// console.log(a); // Outputs:undefined
// var a = 5;

//will become like below:-
// var a;
// console.log(a); //undefined
// a = 5;

//In this case, the declaration var a; is hoisted to the top, but the assignment a = 5; remains in place , but in functions , they are fully hoised.

//-------------------------------------------------------------------------------

// 2. Function Declarations: Function declarations are fully hoisted, meaning you can call a function before it is defined:


// greet();    // Outputs: "Hello!"
// function greet() {
//     console.log("Hello!");
// }

//-------------------------------------------------------------------------------

// 3. Scope: Hoisting applies to the function scope and global scope. Variables declared inside a function are hoisted to the top of that function.

//-------------------------------------------------------------------------------

// 4. Let and Const: Variables declared with let and const are also hoisted, but they are not initialized. Accessing them before their declaration results in a ReferenceError due to the "temporal dead zone":

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

//-------------------------------------------------------------------------------

                /* Q. Does let and const hoists? */

//It is a debatical topic , but acc. to harsh bhaiya and above gpt explanation , yes they are hoisted but only the declaration part .. but still confusing .. Let's discuss about it below

//-------------------------------------------------------------------------------

//i) Just console.log a and see the type of error

//console.log(a);     //ReferenceError: a is not defined

// ii) write let a = 5 below it and see the type of error

// console.log(a);
// let a = 5;      //ReferenceError: Cannot access 'a' before initialization ==> it implies the declaration is being hoisted

// iii) and now see below

// let a;       //only declared
// console.log(a);  //but this gives undefined not the error   ==> this implies that in above case even the declaration is not being hoisted

//-------------------------------------------------------------------------------
                                    //Summary
//-------------------------------------------------------------------------------
// const c; // SyntaxError: Missing initializer in const declaration ....ye apne aap me hi ek error h,isko to bina intialize kre likh hi nhi skte compile hi nhi hota 
//-------------------------------------------------------------------------------

// var a;
// let b;

// console.log(a); //undefined
// console.log(b); //undefined

//-------------------------------------------------------------------------------

// console.log(a);     //undefined
// console.log(b);     //ReferenceError: Cannot access 'b' before initialization

// var a; 
// let b;

//-------------------------------------------------------------------------------

// greet();    // Outputs: "Hello!"
// function greet() {
//     console.log("Hello!");
// }