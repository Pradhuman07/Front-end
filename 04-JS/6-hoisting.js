                            // Hoisting

// Hoisting is a mechanism in JS where variables and function declarations are moved to the top of their scope before code execution.

//1.
// console.log(a); 
//O/P:- (error) a is not defined

//2.
// var a;
// console.log(a); 
// O/P:- undefined (not an error) (uninitialized)

//3.
// console.log(a); //undefined...and not error...how??? Ans:- Hoisting 
// var a = 5;

//What really happens is that, when the interpreter reads the code, it creates a memory space for variables and function declarations. It then moves the declarations to the top of their respective scopes. So, in the above example

// so our above code becomes like this:

// var a;
// console.log(a); //undefined
// a = 5;
// console.log(a); //5

//Note:- Hoisting only works with var
//It does not works with let and const...error aa jyega