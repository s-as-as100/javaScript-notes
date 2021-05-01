console.log("hoisting ?")

// u can access the variable nd function even if  before u initized it 

// getName()  // harry     { most of the programming language show is Error
// console.log(x);  // undefined      because u call the fucntion before initailized}
// // if remove var x = 8 its show refrence error x is not defined   because there is no x in memory 
// allocation phase in the global context

// // console.log(getName) // it show functions 
// var x =8 ;
// function getName() {    // get function 
//     console.log("harry")

    
// }
// getName()
// console.log(x)
// console.log(getName)
// if convert function into arrow function it show typeError  get name is not function 
// beacuse it behave like another varible // in memory allocation phase we get x to undefine
// also get undefined to getName 
// var getName = () =>{
//     console.log("harry")   // its undefined in memory fnt due to arrow function 
// }
// 
// var getName2 = function() {
//      // it also behave like variable  // undefined 
// }