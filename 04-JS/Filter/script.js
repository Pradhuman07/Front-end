// 1.	Given an array of numbers, use .filter() to return a new array containing only numbers greater than 10.
// const numbers = [5, 10, 15, 20, 25];
// Expected output: [15, 20, 25]
//____________________________________________________________________________________

// const arr = [5, 10, 15, 20, 25];
// const ans = arr.filter((elem)=>{
//     return elem>10;
// })
// console.log(ans);

//____________________________________________________________________________________
// 2. Given an array of words, use .filter() to return only the words with more than 4 letters.
// const words = ["car", "bicycle", "bus", "train"];
// Expected output: ["bicycle", "train"]
//____________________________________________________________________________________

// const arr = ["car", "bicycle", "bus", "train"];
// const ans = arr.filter((elem)=>{
//     return elem.length>4;
// })
// console.log(ans);

//____________________________________________________________________________________
// 3. Given an array of objects representing people with name and age, return an array of people who are 18 or older.
// const people = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 15 },
// ];
// Expected output: [{ name: "Bob", age: 20 }]
//____________________________________________________________________________________

// const arr = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 20 },
//   { name: "Charlie", age: 15 },
// ];
// const ans = arr.filter((elem)=>{
//     return elem.age>18;
// })
// console.log(ans);

//____________________________________________________________________________________

// 4. Given an array of numbers, filter out all the odd numbers.
// const numbers = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]
//____________________________________________________________________________________

// const arr = [1,2,3,4,5,6];

// console.log(arr.filter((elem)=>{
//     return elem%2==0;
// }));

//____________________________________________________________________________________

// 5. Given an array of product objects with name and price, return only the products that cost less than 50.
// const products = [
//   { name: "Notebook", price: 30 },
//   { name: "Bag", price: 100 },
//   { name: "Pen", price: 10 }
// ];
// Expected output: [{ name: "Notebook", price: 30 }, { name: "Pen", price: 10 }]
//____________________________________________________________________________________

// const arr = [
//   { name: "Notebook", price: 30 },
//   { name: "Bag", price: 100 },
//   { name: "Pen", price: 10 }
// ];
// const ans = arr.filter((elem)=>{
//     return elem.price<50
// })
// console.log(ans);

//____________________________________________________________________________________
// 6.Given an array of emails, filter out those that do not contain “@”.
// const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];
// Expected output: ["john.doe@gmail.com", "hello@world.com"]
//____________________________________________________________________________________

// const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];
// const ans = emails.filter((elem)=>{
//     return elem.indexOf('@') > 0
// })
// console.log(ans);

//____________________________________________________________________________________
// 7.Given an array of numbers, filter out only the prime numbers.
// const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// Expected output: [2, 3, 5, 7]
//____________________________________________________________________________________

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// let isPrime = (x) => {
//     let count = 0;
//     for(var i = 1 ; i <= x ; i++ ){
//         if(x % i == 0) count ++;
//     }
//     return count == 2;
// }

// let ans = arr.filter((elem)=>{
//     return isPrime(elem);
// })

// console.log(ans);

//____________________________________________________________________________________

// 8.	Given an array of students with name and marks, return an array of students who scored more than 75.
// const students = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 70 },
//   { name: "Charlie", marks: 90 }
// ];
// // Expected output: [{ name: "Alice", marks: 80 }, { name: "Charlie", marks: 90 }]
//____________________________________________________________________________________

// const students = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 70 },
//   { name: "Charlie", marks: 90 }
// ];

// const ans = students.filter((elem)=>{
//     return elem.marks > 75;
// })

// console.log(ans);

//____________________________________________________________________________________

// 9.	Given an array of mixed data types, use .filter() to return only the strings.
// const mixedArray = [1, "hello", true, "world", 42, "JavaScript"];
// Expected output: ["hello", "world", "JavaScript"]
//____________________________________________________________________________________

// const mixedArray = [1, "hello", true, "world", 42, "JavaScript"];

// const stringss = mixedArray.filter((elem)=>{
//   return typeof elem==="string";
// })

// const numbers = mixedArray.filter((elem)=>{
//   return typeof elem==="number";
// })

// const boolean = mixedArray.filter((elem)=>{
//   return typeof elem==="boolean";
// })

// console.log(stringss);
// console.log(numbers);
// console.log(boolean);

//____________________________________________________________________________________

// 10.	Given an array of objects representing tasks with title and completed (boolean), return only the completed tasks.
// const tasks = [
//   { title: "Learn JavaScript", completed: true },
//   { title: "Learn Python", completed: false },
//   { title: "Learn React", completed: true }
// ];
// Expected output: [{ title: "Learn JavaScript", completed: true }, { title: "Learn React", completed: true }]
//____________________________________________________________________________________

// const tasks = [
//   { title: "Learn JavaScript", completed: true },
//   { title: "Learn Python", completed: false },
//   { title: "Learn React", completed: true }
// ];

// let ans = tasks.filter((elem)=>{
//     return elem.completed;
// })

// console.log(ans);
