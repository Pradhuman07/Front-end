//  1. Given an array of numbers, use .map() to return a new array where each number is multiplied by 3.
//  const arr = [2, 4, 6, 8];
//  Expected output: [6, 12, 18, 24]
// _________________________________________________________________________________ 

// const arr = [2,4,6,8];
// const ans = arr.map((elem)=>{
//     return elem*3;
// })
// console.log(ans);

// _________________________________________________________________________________ 
// 2.Given an array of strings, use .map() to return a new array where each string is converted to uppercase.
// const words = ["hello", "world", "javascript"];
// Expected output: ["HELLO", "WORLD", "JAVASCRIPT"]
//_________________________________________________________________________________ 

// const arr = ["hello", "world", "javascript"];
// const ans = arr.map(((elem)=>{
//     return elem.toUpperCase();
// }))
// console.log(ans);

// _________________________________________________________________________________ 
// 3.Given an array of numbers, return an array where each number is replaced by its square.
// const numbers = [1, 2, 3, 4];
// Expected output: [1, 4, 9, 16]
//____________________________________________________________________________________

// const arr = [1, 2, 3, 4];
// const ans = arr.map((elem)=>{
//     return elem*elem;
// })
// console.log(ans);

//____________________________________________________________________________________
// 4.Given an array of names, use .map() to add the prefix “Mr. “ to each name.
// const names = ["John", "Mike", "Sam"];
// Expected output: ["Mr. John", "Mr. Mike", "Mr. Sam"]
//____________________________________________________________________________________

// const arr = ["John", "Mike", "Sam"];
// const ans = arr.map((elem)=>{
//     return "Mr. " + elem;
// })
// console.log(ans);

//____________________________________________________________________________________

// 5.Given an array of objects representing students with name and marks, return an array with only their marks increased by 5.
// const students = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 75 },
// ];
// Expected output: [85, 80]
//____________________________________________________________________________________

// const arr = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 75 },
// ];
// const ans = arr.map((elem)=>{
//     return elem.marks + 5;
// })
// console.log(ans);

//____________________________________________________________________________________
// 6. Given an array of numbers, use .map() to convert them into strings.
// const numbers = [1, 2, 3, 4];
// Expected output: ["1", "2", "3", "4"]
//____________________________________________________________________________________

// const arr = [1,2,3,4];
// const ans = arr.map((elem)=>{
//     return `${elem}`
// })
// console.log(ans);

//____________________________________________________________________________________
//7.Given an array of product objects with name and price, return an array where prices are increased by 10%.
// const products = [
    // { name: "Laptop", price: 1000 },
    // { name: "Phone", price: 500 }
//   ];
// Expected output: [{ name: "Laptop", price: 1100 }, { name: "Phone", price: 550 }]
//____________________________________________________________________________________
// const arr = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 }
//   ];
// const ans = arr.map((elem)=>{
//     return {
//         name : elem.name ,
//         price : elem.price + (10/100)*elem.price
//     }
// })
// console.log(ans);

//____________________________________________________________________________________
//8. Given an array of numbers, use .map() to return an array of boolean values where true represents even numbers and false represents odd numbers.
// const numbers = [1, 2, 3, 4, 5];
// Expected output: [false, true, false, true, false]
//____________________________________________________________________________________

// const arr = [1,2,3,4,5];
// const ans = arr.map((elem)=>{
//     return elem%2===0
// })
// console.log(ans);

//____________________________________________________________________________________
// 9. Given an array of words, return a new array where each word’s first letter is capitalized.
// const words = ["apple", "banana", "cherry"];
// Expected output: ["Apple", "Banana", "Cherry"]
//____________________________________________________________________________________

// const arr = ["apple", "banana", "cherry"];
// const ans = arr.map((elem)=>{
//     return elem.charAt(0).toUpperCase() + elem.substring(1);
// })
// console.log(ans);
 
// ____________________________________________________________________________________
// 10.	Given an array of temperatures in Celsius, use .map() to convert them into Fahrenheit.
// const celsiusTemps = [0, 20, 30, 40];
// Expected output: [32, 68, 86, 104]
//__________________________________________________________________________________

// const celsius = [0,20,30,40]
// const Fahrenheit = celsius.map((elem)=>{
//     return elem*(9/5) + 32;
// })
// console.log(Fahrenheit);