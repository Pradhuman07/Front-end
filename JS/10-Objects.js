                        // Objects

// let obj = {
//     name: "John",             //property:value
//     age: 30,                                
//     city: "New York",
//     greet: function(){               //greet is a method here..since it is inside the object
//         console.log("Hello World");
//     }     
// }

// console.log(obj);       //{name: 'John', age: 30, city: 'New York' , greet: f}
// console.log(obj.name);  //John
// obj.greet()     //Hello World

// obj.name = "Jane";       //updating value
// console.log(obj.name);   //Jane

// console.log(obj.address); //undefined

// obj.address = "Indripuri"; //Adding new property
// console.log(obj);  //{name: 'John', age: 30, city: 'New York', address: 'Indripuri'}

//-----------------------------------------------
                // Create object using #new keyword

// let obj = new Object();

// obj.name = "John";
// obj.age = 30;
// obj.city = "New York";
// obj.greet = function(){
//     console.log("Hello World");
// }

// console.log(obj);       //{name: 'John', age: 30, city: 'New York' , greet: f}


//--------------------------------------------- 

// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     greet: function(){
//         console.log("Hello World");
//     }
// }

// console.log(obj.age);
// // // console.log(obj[age]); //this does not works #Error but
// let a = "age";
// console.log(obj[a]); //30 //but this works

//---------------------------------------------------
                        //Destructuring
//--------------------------------------------------

// let obj = {
//     name : "Ram" ,
//     email : {
//         primary : "upradyuman@gmail.com",
//         secondary : {
//             first  : "sfcspradhumanupadhyay@gmail.com",
//             second : "alambaba201@gmail.com"
//         } 
//     }
// }
// console.log(obj.email.secondary.second);

// above can be written as below

// let {second} = obj.email.secondary;   
// console.log(second);                    //alambaba201@gmail.com


//-----------------------------------------------
            // Acummulator and products

// let products = [
//         {id: 1,
//         name: "Apple iPhone 13", 
//         price: 999.99,
//         category: "Electronics"} ,

//        {id: 2,
//         name: "Nike Air Max 270",
//         price: 129.99,
//         category: "Footwear"} ,

//        {id: 3,
//         name: "Samsung 4K Smart TV",
//         price: 799.99,
//         category: "Electronics"},

//         {id: 4,
//         name: "Adidas Superstar Sneakers", 
//         price: 89.99, 
//         category: "Footwear"},
        
//         {id: 5,
//         name: "Sony PlayStation 5", 
//         price: 499.99, 
//         category: "Gaming"},
// ];

// let sortedProducts = products.filter(function(val){
//     return val.price<200
// })
// console.log(sortedProducts);

//(2)
// {id: 2, name: 'Nike Air Max 270', price: 129.99, category: 'Gaming'}
// {id: 4, name: 'Adidas Superstar Sneakers', price: 89.99, category: 'Gaming'}

// let electronicsProducts = products.filter(function(val){
//     return val.category === "Electronics" && val.price>800;
// })
// console.log(electronicsProducts);
//{id: 1, name: 'Apple iPhone 13', price: 999.99, category: 'Electronics'}

// let totalSaamaan = products.reduce(function(acc,val){
//     return acc+val.price
// },0)

// console.log(totalSaamaan);  //251.85





//-----------------------------------------------------------------------------
                    // (this Keyword)
//-----------------------------------------------------------------------------

// global -> window
// function -> window 
// method -> Object
// es5 function inside method -> window
// es6 arrow function inside method -> Object

//------------------------------------------------------------------------------

// console.log(this);      //window
// let a = function(){     //window
//     console.log(this);
// }
// a()

// let obj = {
//     name : "Ram" ,
//     b : function(){

//         console.log(this);  //object

//         let c = function(){
//             console.log(this);  //window
//         }
//         c()

//         let d = () =>{
//             console.log(this);      //object
//         }
//         d()

//     }
// }
// obj.b() 


//---------------------------------------------------------------------
