console.log(" What is closures ?")

// closure+ prototypes = super power of JavaScript
// closure is simply that combination of functions nd the lexical Environment from which it was declared?
// closure is allow a function to access variables from an enclosing scope or environment even after it leaves 
//the scope in which it was decalred 

function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father' 
        return function c() {
            let son ='son'
            return ` ${grandpa}>${father}>${son}`
        }
    }
}

a()
// how did son of all people remember what grandpa

// function was invoked so the only things we have remaining is this 
//so  what happens when things get popped off the stack
// well we remove the variable env  so should n't grandpa be garbage collected 
// nd thrown away because well we removed it from the stack
//son  has access to grandpa and also has access father  even after we call the B function 
// and this is what closure 

// closure Visualization
// with closer by the way this little box is going to be our closure when we run the function
// first well it pops into the stack or grts pushed  onto the stack nd we create 
// a variable Environment right in this context execution has grandpa as a variable 
// it would also have paramters 
// once we call function a()
// we have chain here rember that gives us a link to the global scope
// but now nd here once this gets removed off the stack its gone but grandpa still remains
// becasue grandpa over here goes up into this box of closure //
// why is that because this box is here  technically where memory heap right (bunch of memory)
//however when the garbage collector comes sees grandpa says thers's closure here 
// this closure box i can't clean up because there's somthing tht is referc grandpa from inside it
//** IN javaScript engine will make sure that the function has access to all of the variable
// outside of the function with this closure box  so closure is feauture of JS  */
// closure is also called lexical Scoping 
// lexical means where it is written 
// scoping means is what variable   we have access 
// js is lexical Scope or statically 
// heaps is cleaned by garbage collector

// ***** most imp use of closue is so i can't wait five years nd hold into 
// information in memory doesn't get deleted and i can call it whenever i want 
// example 
// const boo = (string) =>name =>(name2) =>
// console.log(`${String} ${name} ${name2}`)
// const booString =  boo('hi');
// // 5 years 
// const booStringName= booString()
//  exercise 
// function callMeMaybe() {
//     const callMe = ' hi Im a developer'  // it doesn't matter where it define 
//     setTimeout(function() {
//         console.log(callMe)
//     }, 4000)
    
// }
console.log(" closure nd memory ?")
console.log("closure have two main benefits?  memory efficient Encapsulation") 
// 1. Memory Efficient
// // without closure 
// function heavyDuty(index) {
//     const bigArray = new Array(7000).fill('@')
//     console.log('created !')
//      return bigArray[index]
// }
//  heavyDuty(688)
//  heavyDuty(1000)
//  heavyDuty(4000)
//  heavyDuty(700)
//  const getHeavyDuty =  heavyDuty2();
//  getHeavyDuty(400);
//  getHeavyDuty(599)
//  getHeavyDuty(500)
// // use of closure
// function heavyDuty2() {
//     const bigArray2 = new Array(6000).fill('$')
//     console.log('created using closure')
//     return function(index) {
//         return bigArray2[index]
//     }
// }  



// 2. Encapsulation 
// const makeNuclearButton = () => {
//     let timeWithoutDestruction = 0 ;
//     const passTime =() => timeWithoutDestruction++;
//     const totalPeaceTime = () => timeWithoutDestruction;
//     const launch = () => {
//         timeWithoutDestruction = -1;
//         return 'boom';
//     }
//     setInterval(passTime, 1000) 
//     return {
//         // launch: launch, 
//         // remove the launch function from the return object nd instead
//         // just have total peace time so that if i run launch now no
//         // launch is not function nd this Encapsulation does 
//         // show lauch is not function 
//         // hiding of information that is unnecesary to be seen by the outside 
//         // world
//         totalPeaceTime: totalPeaceTime
//     }
// }
//  const ohno = makeNuclearButton();
//  ohno.launch()
// Exercise 
// let view;
// function initialize() {
//     view = '#';
//     return view
// }
// *** Mostly asked interview question 
// 1 way to solve using let keyword instead of var 
// 2 closure
// const array = [1,2,3,4];
// for(let i = 0 ; i < array.length; i++) {
//     setTimeout(function(){
//         console.log(' I am at index' + i)
//     }, 3000)
// }
// using closure
// const array = [1,2,3,4]; 
// for(var i = 0; i<array.length; i++) {
//     (function(closureI){
//         setTimeout(function() {
//         console.log("im index" + array[length])
//     }, 3000)
// })(i)
// }
// closure allows a function to access variable from an enclosing scope or outer scope 
// environment even  after it leaves the scope in which it was decalred bec all matters 
// // in JavaScript is where the function is written 
// if  (true)  {
//        function  fn()  {
//              return  10;
//          }
//      } else if(true) {
//          function fn() {
//              return 2;
//          }
//      }  else        {
//          function  fn()  {
//              return  20;
//          }  
//      }
//    fn();


 

































































