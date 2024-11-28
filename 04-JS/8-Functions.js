                    // Functions

                    // Purani JS (ES5 and before)

// 1. Function Declaration   

// function abcd(){    
//     console.log("Hello");
// }
// abcd();

// function abcd(a,b){
//     console.log(a+b);
// }
// abcd(5,3);

// 2. Function Expression    

// let abcd = function(){
//     console.log("Hello");
// }
// abcd();

                    //Nayi JS (ES6 and after) 


//1. Fat Arrow Function

// let abcd = () => {   
//     console.log("Hello");
// }    
// abcd();

// let abcd = (a,b) => {
//     console.log(a+b);
// }
// abcd(5,3);

//with #OneParameter

// let abcd = a => {
//     console.log(a);
// }
// abcd(5);                  //5,2 bhi pass kroge to koi error nhi ayega


//2.Arrow Function with Implicit Return

// let abcd = () => 12;             //return 12; No...return is not required in this case
// console.log(abcd());  //12

// let abcd = (a,b) => a+b;          //return (a+b); No...return is not required in this case
// console.log(abcd(5,3));  //8

//3.Anonymous Function

// function(){
//     console.log("Hello");        //error dega...this is used in first class function
// }


//------------------------------------------------------------------------------
                        // Point to be noted
                        
// function abcd(a,b,c,d,e){
//     console.log(a,b,c,d,e);
// }
// abcd(1,2);  //1,2,undefined,undefined,undefined

// function abcd(a,b,c){
//     console.log(a,b,c);
// }
// abcd(1,2,3,4,5,6,7,8,9,10);  //1,2,3


//------------------------------------------------------------------------------
                            // Day 9

                        // Default Parameters

// function abcd(a=5,b=6,c=7){
//     console.log(a,b,c);
// }
// abcd();  //5,6,7
// abcd(0);  //0,6,7

//------------------------------------------------------------------------------
                        //Rest Parameters       (+,-,*,/,%, ... -> rest/spread operator)

// function abcd(...args){
//     console.log(args);
// }
// abcd(1,2,3,4,5);  //[1,2,3,4,5]

// function abcd(a,b,...arr){
//     console.log(a);         //1
//     console.log(b);         //2
//     console.log(arr);     //[3,4,5]
// }
// abcd(1,2,3,4,5,"Hello",true,[],{});  

//------------------------------------------------------------------------------

                        // Day 10 (First Class Functions)

                        // Function as a Value

//JS me function ko special darza diya gya h .. i.e functions ko value ki trh bhi treat kia ja skta h

                                // or 

//JS me function is a first class citizen. It can be assigned to a variable, passed as an argument to another function, and returned from a function.       

    //i.e

// function abcd(a){
// }
// abcd(5);

// like above like below

// function abcd(a){   //a is a function here
//     a();
// }

// abcd(function(){                    //from here control goes to function abcd and a() function is called there inside abcd
//     console.log('hello');       
// })

// ...............*********.........................

                //More examples of First Class Functions

// function abcd(a){
//     a(5);
// }                

// abcd(function(b){                   //yaha se control goes to function abcd and a() function is called there inside abcd which further calls b() with 5 as argument
//     console.log(b);     
// })

// ...............*********.........................

// function abcd(a){                   //a is function(b) here
//     a(function(){                   //a(b) means b is also a function containing 'hey' which is called when b() is called
//         console.log('hey');
//     })
// }

// abcd(function(b){
//     b();            //print hey                 
// })


