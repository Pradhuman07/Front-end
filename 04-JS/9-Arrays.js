                        // Array

//Array is a data structure in JavaScript that allows you to store multiple values ("of same or different type") in a single variable .

// Eg:- 

// ---------------------------------------------------------

// let arr = [1,2,3,4,5];

// console.log(arr);       //[1,2,3,4,5]
// console.log(arr[0]);   //1

// arr[0] = 10;
// console.log(arr);       //[10,2,3,4,5]

// arr.push(6);
// console.log(arr);       //[10,2,3,4,5,6]

// arr.pop();
// console.log(arr);       //[10,2,3,4,5]

// -------------------------------------------------------

// let arr = [1,2,3,4,5];

// arr.shift(); 
// console.log(arr);       //[2,3,4,5]

// arr.unshift(78); 
// console.log(arr);       //78,2,3,4,5

// ----------------------------------------------------------

// let arr = [1,2,3,4,5];
// arr[-36] = 70;              //# -ve index
// console.log(arr);

//-ve index ? bcoz in js array is a object (in java?)

//-------------------------------------------------------------
                        //Rest Parameters       (+,-,*,/,%, ... -> rest/spread operator)

// function abcd(...args){
//     console.log(args);
// }
// abcd(1,2,3,4,5);  //[1,2,3,4,5]

// function abcd(a,b,...arr){
//     console.log(a);         //1
//     console.log(b);         //2
//     console.log(arr);     //[3, 4, 5, 'Hello', true, Array(0), {…}]
// }
// abcd(1,2,3,4,5,"Hello",true,[],{}); 

//------------------------------------------------------------

// Q.Create a array of size 1000 and fill it with zeros.

// let arr = [];

// for(let i = 0; i < 1000; i++)
//     arr[i] = 0;

// console.log(arr);


// Q.Create a array of size 1000 and fill it with zeros without using loop.

// let arr = new Array(1000);  //object
// console.log(arr);   // (1000) [empty x 1000]  // empty array //java me [0,0,...0] by default zero on every position

// arr.fill(0);
// console.log(arr);



//-------------------------------------------------------------------
                      //Functions of arrays
//--------------------------------------------------------------------
                        // forEach()

// let arr = [1,2,3,4,5];

// //for each accepts the function as a argument //for each ko call krrhe h na to calling ke time pe to argument bolte h

// arr.forEach(function(){       //for each element of the array,this function is executed
//     console.log("Hello");    // 5 times Hello
// })

// since for each function does not return anything so there is no need to store the return value in any variable 

// // by default for each ka jo argument function hota h uska jo pehla parameter (function bna rhe h to parameter bolenge) hota h wo array ki values hoti h aur jo doosra parameter hota h wo array ke indexes hoti h

// arr.forEach(function(val,index){   // a , i bhi likh skte ho
//     console.log(val,index);       //1 0 ; 2 1 ; 3 2 ; 4 3 ; 5 4 ..println i.e each on new line
// })

// index,val likhne se kuch bdl nhi jyega  variable ka naam h kuch bhi likhdo pr pehla variable values hi print krega aur doosra indexes

//-------------------------------------------------------------
//                    map()

//It is dangerous to do any operation in our main array..we might loose our main data , so for that we do so in another array..for that map() is used 

// let arr = [1,2,3,4,5];

// let ans = arr.map(function(val){
//     return val;                   //always need a return value
// })

// console.log(ans);       // [1,2,3,4,5]


// let ans = arr.map(function(val){
//     return val*2;                   
// })

// console.log(ans);       // [2,4,6,8,10]

//----------------------------------------------------

// Note:- map() functions returns a value for each value of the array so it should be stored in some variable which will be an array too for sure obviously

// let arr = [1,2,3,4,5]

// let ans = arr.map(function(val){
//     console.log("Hi");              //5 Hi
// })

// console.log(ans);   // (5) [undefined, undefined, undefined, undefined, undefined]


//----------------------------------------------------------

//                  filter()

// let arr = [1,2,3,4,5];

// let ans = arr.filter(function(val){
//     return val>3;                       //filter() ka return type is boolean 
// })

// console.log(ans); //[4,5]

// let ans = arr.filter(function() {
//     return true;
// })
// console.log(ans);   //[1,2,3,4,5]

// ---------------------------------------------------------
                    //  splice() and slice()

//In JavaScript, splice() and slice() are methods used to manipulate arrays, but they work differently:

                            //1.splice() 

// (Modifies the Original Array)
// Used to add, remove, or replace elements in an array.
// Modifies the original array.
// array.splice(startIndex, deleteCount, item1, item2, ...);
// startIndex: Position to start modifying.
// deleteCount: Number of elements to remove.
// item1, item2, ...: Elements to add at startIndex.

//Example: Removing Elements
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2); // Removes 2 elements starting from index 2
// console.log(arr); // Output: [1, 2, 5]

//Example: Adding Elements
// let arr = [1, 2, 5];
// arr.splice(2, 0, 3, 4); // Adds 3 and 4 at index 2
// console.log(arr); // Output: [1, 2, 3, 4, 5]


                    // 2. slice() 

// (Does NOT Modify the Original Array)
// Used to extract a portion of an array.
// Does not modify the original array (returns a new array).

// array.slice(startIndex, endIndex);
// startIndex: Starting position (inclusive).
// endIndex: Ending position (exclusive).

// Example: Extracting a Subarray

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 4); // Extracts elements from index 1 to 3
// console.log(newArr); // Output: [2, 3, 4]
// console.log(arr); // Original array remains unchanged: [1, 2, 3, 4, 5]


// ---------------------------------------------------------
                    //  reduce() 

// let arr = [1,2,3,4,5];

// let sum = arr.reduce( function(acc,val){return acc+val} , 0) 
// console.log(sum); //15

// let product = arr.reduce( function(acc,val){return acc*val} ,1) 
// console.log(product); //120


//reduce function returns a single value
//reduce function accepts two paramter i)function(acc,val ii)initial value for accumulator

//Note:- Initial value dena zruri nhi h but its an good practise
//Note:- Agr Initial value nhi doge to js is smart..wo sum wle me by default 0 rkhegi aur product wle me 1
//-----------------------------------------------------------
                    // includes()

// let arr = [1,2,30,4,5]
// console.log(arr.includes(3));   //false
// console.log(arr.includes(30)); //true


//-------------------------------------------------------------------
                //Note:- 

// let arr = [15,20,25,30,];

// arr.forEach(function(val){
//     val = val*2; 
// });

// console.log(arr);   //[15,20,25,30]  ie same ..bcoz val ek (shallow copy) variable tha uske andr jo aarha tha aapne usme changes kre h na ki original array me

// let arr = [15,20,25,30,];

// let arr = arr.map(function(val){      //#Error Not Possible 
//     return val*2;                    
// });



//---------------------------------------------------------
                        //Destructuring
//---------------------------------------------------------

// let [a,b,,,c] = [1,2,3,4,5]
// console.log(a,b,c);     //1,2,5