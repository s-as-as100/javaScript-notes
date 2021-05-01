 console.log(" What is closure?")

//  function x() {
//      var a =12;
//      function y() {
//          console.log(a)
//      }
//      y()
//  }
//  x()  // out : 12
//  // this is closure 
//  // function is along with lexical Scope froms a closure
// // closure return function + along (refrence to that variable) with lexical Scope 
//  // A closure is the combination of function bunndle together(enclosed)
//  // with refrence to its surrounding state((lexical environment ))
//  function x() {
//     var a =12;
//     function y() {  // u can put return keyword before function y  then remove return y
//         console.log(a)
//     }
//     a = 13;     
//     return y;
// }
// var z =x()
// console.log(z)
// z()
//
//....... if i call function after 100 lines 7 is output because of closure
// output is 13 now
// z is remember refrence to a 
// y function is remember its lexical scope

//

// function z() {
//     var a = 29;
//     function y() {
//         var b = 30;
//         function x() {
//             console.log(a,b)
//         }
//         x()
//     }

// y()


// }
// z()
                           // closure outout a =29, b=30
 // function remember thing right 
 //

 //8********** USES of CLosure
 // 1. Modern Design Pattern, currying , function like once , memoize, maintaining state in asyn world
 //2. setTimeout , iterators nd many mores




























