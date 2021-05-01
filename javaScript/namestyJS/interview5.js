console.log("Hoisting of let & const in JavaScript ?")
// let nd const declaration are hoisted ..
console.log(b) // undefine u can access the variable before it initiazed bec of hoisting ?
let a = 12;

var b = 13;
// in case of let nd const they are allocate memory but they are stored in diffferent memory space
// nd u cannot access this memory space 
// u cannot access the let nd const dec before u put some value in  them


// what is temporal dead ?
// Is the time since when

// console.log(a);
//      { the time between from hoisted to get some value in them is called temporal dead Zone}
// let a =50;  // before the line 17 is TDZ for a
// a is not attachd to window object
// beacause they are attached in another storage
// var b =56; // is attached to the window object
// window.b   // 56

// whenever u try to access  variable inside the tempr Ded Z  is show " Reference Error"


// let is more strict then var nd const is more strict then let
//syntax even code is not run
// In case of const initiazed nd declared both at same time 
// is called type error 


// -> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
// -> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
// -> level of strictness ... var<<let<<const.
// -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
//     let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
//     const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
// -> syntax error is similar to compile error. while type and reference error falls under run time error.
// -> syntax error ... violation of JS syntax
//     type error ...  while trying to re-initialize const variable
//     reference error ... while trying to access variable which is not there in global memory.

// how to avoid TDZ
// initailized var nd all thing in the top of the program



















