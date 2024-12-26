                     //Flaws of var
//-------------------------------------------------------------------------------

//i)

// var a = 12;
// var a = 5;   //This should be an error but not so ... let,const will give an error 

//-------------------------------------------------------------------------------

//ii) 

// function abcd(){
//     for(var a = 1 ; a<6 ; a++){
//         console.log(a);
//     }
//     console.log(a);     //This should be an error but it is not so
// }
// abcd()

// var is accessible to its nearest parent function ... let,const will give error

//-------------------------------------------------------------------------------

//iii)

// var a = 5;
// console.log(window);   //a:5 aayega but let,const me nhi ayega

//------------------------------------------------------------