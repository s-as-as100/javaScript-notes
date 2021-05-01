console.log(" Functional programming Introduction ?")
//functional language an emphasis on simplicity where data nd functions are concerned
// we separate them up nd most functional 
// the goal of functional programming is exaxt same as OOP

// pure functions -- there's a seperation b/w data over a program nd the behaviour program
//in all objects created in functional programming are immutable
//  once something is created nd cannot be changed 
console.log("Is JavaScript OOP or functional?")
// Those first-class functions are what makes functional programming possible in JavaScript.
//  JavaScript is a multi-paradigm
//  language that allows you to freely mix and match object-oriented, procedural,
//  and functional paradigms
console.log("What is the difference between functional programming and OOP?")
// Functional programming and object-oriented programming uses different method
//  for storing and manipulating the data. In functional programming, data cannot be stored in objects
// , and it can only be transformed by creating functions. 
// In object-oriented programming, 
// data is stored in objects.

console.log("Pure Function ?")
// function have no side effects
// function that given the same input nd return the same output(no matter how many times u call it )

// const array = [1,2,3]
// function mutatrArray(arr) {
//     arr.pop()
// }
// a(array)
// console.log(array)  // [1,2]
// now function has what we call side effect (modify the fucntion outside itself)
// how can we make this code not have any side effects
// const array =[1,2,3]
// function removeLastItem(arr) {
//     const newArray = [].concat(arr)
//     newArray.pop()           {
//         // it doesn't matter we're no side effecting outside world
//     }
//     return newArray

// }
// console.log(removeLastItem(array))

//input -- > output 
// function a(num1, num2) {
//     return num1+num2;
// }
// a(3,5)  // if click pon run result remain same
// we call referential transperancy simply means if i completey change function to 8 will affect 
// any part of my program not effect 
// paramter are local variable 
// pure function is that it makes function very easy to test very easy
// to compose nd it aviods a lot of bugs because we have no mutations no shared state
// console.log have side effect it effect the outside of the world
console.log("Can everything be pure function ?")
// no 
//1 task, return statement,pure,no shared data, immutable state, compasable, predicatable 

console.log("Idempotence ?")
// idea of idempotent is a function that always return or does what we expected to do 

// function notGood(num) {
//     console.log(num)
// }
// notGood(5)
// it makes our code predictable by the way

// Math.abs(Math.abs(-59));
 //  calling this function over nd over inside of itself always return the same thing
 console.log("Imperative Vs Declarative ?")
// well imperative code is code that tells the machine what to do nd how to do it ex - computer 

// declarative code tells it what to do nd what should happen example = human being

console.log("immutability ?") 
// In OOP is changing the state 
// IN Fp it is immutable it not changing state but instead making copies of the state nd returining 
// a new state every time 
// const obj  ={
//     name: ' harry'

// }
// function clone(obj) {
//     return {...obj}  // this is pure 
// }
// obj.name = "potter"

console.log(" Higher order functions nd Closures ? ")
// HOF
// const hof = () => () => 5;

// const hof = (fn) => fn(5);
// hof(function a(x) {return x})

// closure 
//cloasure to crate ur data privacy which is very cool because now as a user i cant 
// really modify 
// closures get used a lot in functional P for the specfic reason


















































































