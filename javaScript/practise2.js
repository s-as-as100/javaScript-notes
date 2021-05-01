console.log("Execution Context");

// function printName() {
//     return 'mohd Arif'
// }
// function findName() {
//     return printName()
// }

// function sayMyName() {
//     return findName()
// }

// sayMyName()
// its create global execution context global()
// first it create a Execution context say my name and add  this execution context sayMyName()
//oh this function return another function nd crt new execution context findname()
//then this function after it's created its own execution context is going  return name;

// whenever code is run in Js it is run inside of an execution context 
//(global Execution context)
// jS engine does is to create this global execution context nd its give you two thing 
// (1) global object(Window) (2) this keyword in JS  


// 2nd phase (Run Your Code)

console.log("Lexical Environment ?")
// In jS our lexical Scope where code is written  so lexical Scope which is the available data nd
// variables where the function 
// (In js our lexical scope (available data + variable where the function is define ) determine our available)
//variables. Not where the func is called ( dynamic Scope)

// function findName() {
//     function a() {

//     }
//     return printName()
// }
console.log("Hoisting ?")
// Hoisting is the behaviour of moving the variables or function declarations to the top of their respective
// environments during compilation 

/// hoisting it is the javaScript engine allocating memory for the variables
// in between phase of global Execution context nd Run code 


                            //OUTPUT
// console.log('1----');   // 1----- 
// console.log(teddy);     // undefined
// console.log(arif())     // ohh la lu because of hoisting 
// var teddy ='bear'; 

// this is called function expression 
// var arif2 = function(){
//     console.log('uhhh')
// }

// this is function declaration 

// function arif(){                 // if i wrap the function with brackets then run code it show
//     console.log('ohh la la') // reference error because it doesn't hoisted 
// }


// var y ='teddy boy';
// function sing() {
//     var x = 'saifi';
//     console.log(x)
// }
// sing()
// console.log(y)

// we have the global Execution context inside the global Execution context we have global object and this 
// object during the creation phase that gets assigned and then during the execution phase run our code
// it is important to remember that during this creation phase we also have this act of hoisting something 
// there is a creation nd execution phase where there hoisting is involved 
// output is bye because it rewrite in the memory nd location of a() is independent 
// function a() {
//     console.log('hi')
// }

// function a() {
//     console.log('bye')
// }
// a()
// // hoisting interview question (difficult)
// hoisting is happen on every execution context
//  var favFood = "banana";
//  var foodThoughts =  function() {
// console.log('Original fav food :' + favFood );
// var favFood = 'grapes';
// console.log("new fav Food:" + favFood);

// }
//   foodThoughts();
// 1st step is create execution phase 
//   1st line execution phase var favFood = undefined;   {  creation phase 
//   2nd line Execution phase var favThoughts = undefined;   is done  }
//2nd Step is executing the code 
// remove var keywords
// favFood = "banana";                                 { now as soon we run this function 
// foodThoughts =  function() {            
//     // favFood = undefined{due to hoisting}                     a new execution context is created 
// console.log('Original fav food :' + favFood );              nd inside of this execution context hoisting 
// var favFood = 'grapes';  // (var removed)       happens during the creation phase 
// console.log("new fav Food:" + favFood);                      }

// }
//   foodThoughts();

console.log("Function Invocation ?")
 

// function Invocation/ calling/Execution

// foodThoughts() //  this is called function Invocation/ calling/Execution

// function marry(p1,p2) {
//     console.log('arguments', arguments)
//     return `${p1} is now married to ${p2}`
// }
// marry('Mohd ', 'arif ');
// arguments  // we dont really get arguments in the global object do we get error
              /// Arguments is not defined because while arguments is only available
              // to  us when we create a new execution context with a function 


// function q() {      // im going to run this function i get an empty arguments object 
//     console.log(arguments)  // we can still use the arguments object even though its
//     console.log('wa')  empty even we dont pass any parameters bec on each execution context
// }  we create a new arguments object 
// q()

console.log("Variable environment")
// now this variable Environment a place where we store information and by the way when i say store information
//each Execution context has its own variable Environment 

// function two() {
//     var isValid; // undefined 
// }
// function one() {
//     var isValid = true;  // local Environment 
//     two();  // new Ec
// }

// var isValid = false;
// one();

// //slack
// //two() -- undefined   
// //one()  --true                
// // global()  --false
console.log("Scope Chain ?")
// the global Scope is the outer most scope so variable declared outside a function 
// Scope is hey where can i access that variable where's that variable in my code
//undefined is actual type in js undefined it means we have this variable but it's 
// not assign anything  right now 
//example
// function sayMyName() {             //  (  lexical Environment ) 
//     var a ='a';
//     return function findName() {
//         var b='b';  
//         console.log(c); // if i console c here it show refrence error c is not defined
//         return function printName() {
//             var c = 'c';
//             console.log(a);                  // output a 
//             return 'Mohd Arif'              // mohd Arif 
//         }
//     }
// }
//  sayMyName()()
 console.log("lexical Environment === [[scope]]")

// when a function is called an environment is created for the new scope that us enters
// little world that it entered that environment has a field that has it own variable
//but  also another place that points to the outer scope and then that outer scope points to outer
//untils it hit the global scope

console.log("Exercise Question");

// function weird() {

//     //  'use strict' 
//     //  you strict was introduced as a way to prevent Js for doing these weird unpredictable edge 
//     // // classes
//     height =50;  // if i run this program is show undefine because it not return anything
//    // if var,let,const put before height those keywords tell to Js to put those in our variable environment 
//    //but its not there because now its going up the scope to the global Environment and says hey is there such 
//    // thing as


//     return height
// }
// weird()

// another Example 
// var heyhey = function doodle() {
//     // do something
//     doodle() //  we can only accces inside in scope 
//     return 'Arif'
// }

// heyhey()   // output :  Arif
// doodle()   // output: reference error  that means its no where to be seen in the scope chain  this is 
// // because doodle function is actually enclosed in its own scope doodle get added to its own 
// // execution context variable environment very wired 










































































