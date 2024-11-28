                        //Block Scope

// {
//     var y = 5;
//     console.log(y); //5
// }
// console.log(y); //5 ... y is accessible outside the block scope  .. ye phli dikkt thi var ke sath 


// {
//     let x = 5;
//     console.log(x); //5
// }                            
// console.log(x); //error ... x is not defined because it is inside block scope

//First Difference between var and let

//------------------------------------------------------------------------------
                        //Function Scope

// function abcd(){
//     var z = 5;
//     console.log(z); //5
// }
// abcd();
// console.log(z); //error ... z is not defined because it is defined inside function scope

// function abcd(){
//     let w = 5;
//     console.log(w); //5
// }
// abcd();
// console.log(w); //error ... w is not defined because it is defined inside function scope and not accessible outside

