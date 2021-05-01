console.log(" How functions Invocation work in JS nd variable environment ?")
//Q All var name is same in whole Program how JS behave 

// var x = 1;
// a();
// b();
// console.log(x)

// function a() {
//     var x = 10;
//     console.log(x)
// }

// function b() {
//     var x = 100;
//     console.log(x)
// }
// output
//10
// 100
//1 

// memory space is also called variable Environment ..


console.log("what is window nd this keywords ?")

// if i ran the window on the console it show big object with lots of functions
//this function nd var are created by JS Engine 
// u can access any var nd function inside the JS program
//



// for global level this is tend to window objects ( is created along  with global exceution context is created)
// whenver any JS program is run  global object is created
// nd global execution context is created along with this var is created
// this === window at global level is true in case of browser
// what is global space ?
// var a = 20; is it global space 
// function v() {
// var x=10; this is not global space but empty function with x is global space
//} anthing iss created inside the function is not a global space!


console.log(" what is undefined Vs not defined ?")
// jS is put placehOlder is undefined
// undefined it take memory nd until the variale is assgined another value  
// not defined something that's is not allocated to memory

// undefined is like a placeholder which is kept inside the variable 
// nd its say that whole code that var is not assigned anything 



// var a;
// console.log(a)

// if(a=== undefined) {
//     console.log(" a is undefined")
// } else {
//     console.log(" a is not undefined ")
// }
                    //  a = 10
// undefined            //  undefined
// a is undefined     // a is not undefined 

// Js is loosly typed language it means not attached to var to specific data type 
// var a;
//  console.log(a);   // undefined 
//  a=10;
//  console.log(a);   // 10
//  a=" Hello World";
//  console.log(a);  // hello world 



















































