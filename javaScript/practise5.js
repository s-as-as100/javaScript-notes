console.log("JavaScript Types")
// primitve types 
// 1. its data that only represent a single value so that means this is primitive five well in memory
// 2. primitve data type is immutable
//                 // output
// typeof 5      // number  // 5 in memory 
// typeof true   // boolean
// typeof 'To be '  // 'string'
// typeof undefined   // undefined is the absence of defination 
// // is used as default value when the JS engine intialize is our variables
// // it means there is no value there 
// typeof null        // object
// // null is absence of value , 
// typeof Symbol('just')  // 'symbol' // IS new in ES6 nd it creates somthing unique for us 
// // in this case just me is useful for identifying an object so symbols are usually used for bject properties


// non-primivitve
// 1. type doesn't contain the actual value directly 
//
//  const obj1 = {
//      a:'Tom'
//  } 
 // this object doesn't contain the value here directly 
// typeof {} // object 
// typeof [] // object
// typeof function() {} // function 


// // Arrays nd functions are objects 

// // example  function a() {
//     return 5;
// }
// a.hi = 'hi'
// console.log(a.hi)
// // can i add the property to a function just like i can with an object with dot notation 



// there are built in objects that come with JS but you might be asking yourself 
console.log("Array.isArray")
//Array are objects in JS because underneath the hood 
// Array.isArray is check  in jS is object or  array;
// Array.isArray({})   // Array.isArray([])
  // output 
// false                  true 


console.log("Pass by Value or Pass by Reference ?")
// primitive types are exactly like that when i assign a variable a = 5 somewhere in memory 
// variable  a is going to contain nd refrence the value of 5 if I do variable b = 10 
// same thing nd they dont really know of each other's Existence 
// this is what we  call pass by value objects  on the other hand are what we call
// pass by reference 
//  var a = 5;
//  var b = 10 ;  if var b= a ;  what happen then remeber primitive data types they're passed by value 
//  when we do pass by value 
// ## pass by value means we copy the value nd we create that value somewhere else in memory
 // example of pass by refrence 
//  let obj1 = {
//      name:'Mohd',
//      password: '12'
//  }
//  let obj2 = obj1;
//  obj2.password = '1234'
//  console.log(obj1)   // name : mohd password: 1234
// console.log(obj2)   // name : mohd password: 1234 # password is updated due to pass by refrence 

// objects in JS are stored in memory nd are passed by reference which means that we did not 
// copy the value like we did with primitivr types 
// each object is passed by refrence 

// const number = 100
// const string = "jay";
// let obj1 = {
//     value = "a"
// }
// let obj2 = {
//     value="b"
// }
// let obj3 = obj2;

// function change(number,string,obj1,obj2) {
//     number = number * 10;
//     string = "peter";
//     obj1 = obj2;
//     obj2.value ="c";

// }


// change(number,string,obj1,obj2) ;
// console.log(number);
console.log("type Coercion ?")

// type coercion means that when the appearance that is the things to the left 

// to the right !!
// type coercion means the language converting a certain type to another type 
//  1 == '1' // true // it check the value first 
//  1==='1' // false because it check the type first then value 
 
// Q1 Do all languages have type coercion ? 
//  yes 
// nan === nan // false using object.















































































































































