console.log(" first class function ?")
// ananomous function is function which has no name is called an function

// function statement  or function declaration both are same things 
a()
b()
function a() {
    console.log( ' a is called!')

}
a()

// function expression 
 var c = function () {
     console.log("  b is called")
 }
 c()


 // difference b/w function expression nd statement 
 // 1 . hoisting
  // if i call the invoke the fucntion before is decalration , a()  // a is called //b() is not function 


// Ananomous function
// ana func are used at that place where function as used value 
function () {

}

// Named function expression !!
var c = function x() {
    console.log("  b is called")
}
c()
x() // it show refrence error x isnot defined 




// difference b/w arguments nd parameter
// valid way to use of functions 
var b = function(param1) {
    console.log(param1)
}

function x() {

}

b(function() {
    
})

b(x)

//  first class function or first class citizen both are same things 
// the ability to used  function as value can be passed as argument into another function
//

var b = function (param1) {
    return function xyz() {

    }
}

console.log(b())

// Arrow Functions 






















































