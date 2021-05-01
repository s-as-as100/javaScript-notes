console.log("stack overflow?")

// we have functions that are nested inside of each other So 
// that we keep growing this stack until larger nd larger is called 
// stackoverflow ?
// recursion is a function is calling itself 

// function inception() {
//     inception()
// }

// inception()

console.log("Garbage Collection ?")

// javaScript is a garbage Colledted language that means 
// jS allocated memory 
// in garbage collected language like JS the garbage collector freeze 
// memory on the heap nd prevents what we call leaks
//  it done automatically
// in c langauge you can control garbage  collection 
// that why c is memory efficient 
// mark nd sweap is used  for garbage collection

console.log("Memory Leak")

// global variable
//  var a= 1;
//  var b= 2;
//  var c=3;
  // Event listeners 
//   var element = document.getElementById('button');
//   element.addEventListener('click', onclick);

// setInterval(() => {
//     // refrerencing objects
// })

console.log("Single threaded language ")

// single  threaded means that only one set instruction is executed
// at a time  because of this Js is synchoronous 
// once thing can happen at the time eg eating food 


console.log("what problems do you see with synchronous code  ?")


console.log("Javascript run time ?")

// in this case the web browser is working  in the background while 
// synchronous jS code is running
console.log(" what is Web API ?")
// web APIs are applications which can do a variety of things like 
//send HttP requests listen to DOm events maybe click events on 
// Dom delay execution u can use setTimeOut WEB API ex- DOm,fetch()
//setTimeout()

console.log(" this is very interview commomn Question ?")
// console.log('1'); 
// setTimeout( () => {console.log('2') , 1000});//  setTimeout timer is independent 
// console.log('3');
// output:
// 1 // we added this into our stack and then immediately the JS engine is going to say Oh SIt time
// 3 // im going to just send it off to web API so this gets moved away from the call stack and gets sent
// 2  // because setTimeout is web API is doesn't care about 

// event loop say is call stack empty is call Stack Mp is the call stack empty 

console.log("difference b/w javaScript Engine nd JavaScript Run time ")

// js file is like musical node 
// js Engine is like person musicican to understand that person one that can read this music nd understand it make sense of it 
// JS Runtime is kind of the whole package where we have the musician but we also give the musician  besides the musicial nodes 


// interview Question 

// setTimeout( () => {console.log('1', 'is the loneliest number')}, 0)
// Promise.resolve('h1').then( () => console.log('2'));
// console.log('3', ' is a crowd')









































