console.log(" what is Prototypal inheritance ? ")
 // well inheritance is an object getting access to the properties nd methods 
 // of another object
 // everything is an object in the array objects gets access to the properties  nd  methods 
 // of the object in JS

     //   object{}
         //     \\
         //      \\
// Array[]        function() // access tp methods nd properties of objects

// example :
// An object gets access to the properties nd methods of another object through
// the prototype chain 
//  const array = []
//  array.__proto__
//  // return a big array [ construcntor : f  , ............]
//  array.__proto__.__proto__
//  // return big object 
// exapmle
// function a() {}
// undefined
// a.__proto__
// ƒ () { [native code] } // a native function nd this is our base function where all functions 
// are created from 
// a.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// another exaple
// const obj1 ={}
// undefined
// obj1.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// // we get another base object 

// let dragon = {
//     name:'Harry',
//     fire:true,
//     fight() {
//         return 5
//     },
//     sing() {
//         return ` I am ${this.name}, the breathe of fire`
//     }
// }

// let lizard = {
//     name: 'Potter',
//     fight() {
//         return 1
//     }
// }
//  const x = dragon.sing.bind(lizard)  // using the bind method to borrow the method

//  console.log(x())
// using prototype inheritance
// lizard.__proto__ = dragon;
// for(let prop in lizard) {
// if(lizard.hasOwnProperty(prop)) {
// console.log(prop)   // output : name , fight 
//}
//}
// lizard.sing()
//lizard.fire
// prototype chain of dragon is get to base object 
// dragon.__proto__  //  output: {}
// dragon is prototype of lizard 
//dragon.isPrototypeOf(lizard)
console.log(" Why prototype all inheritance is useful?")
// the fact that objects can share prototypes means that you can have objects with properties 
// that are pointing to the same place in memory thus being more efficient 

// own property that lives on the base object only lives a memory in one location
//bec well  we'll just use the prototype chain to look for it nd everything that inherits from 
// base object will get access to this we're not repeating code nd saving ourselves memory nd by
// the way whenever we get undefined on the something  

console.log(" inheritance 4  function is a special type of object its callable object where we have code     that can be invoked?")

 // diagram   // multiplyBy5  (function)// which is callable object that has a code invoke 
        //-- prototype:{}
        //__ proto__
             //   {
             //   prototype chain 
             //   }
       
         // Function
    //-- prototype:{} ---> __proto__   // this function here has call apply nd bind 
      //    {
       //   prototype chain 
       //   }

       // object 
       // prototype: {
     // hasOwnProperty: fn()   --> __proto__  // ---- proto chain links to === null
       //}

       // __proto__  --->(father) prototype:{}  // Proto is simply reference or pointer to up the 
       // chain prototype object
       // proto property actually lives  on prototypes // this way we're able to be efficeint with our 
       // memory
// Arrays nd functions are objects in JS 
console.log(" Prototypal inheritance ? ")


// let human ={
//     mortal: true
// }
// let socrates = Object.create(human)
// socrates.age=45;
// console.log(socrates.mortal)
// // because  using object to create a prototype chain up to human so if i do
// //human . is a prototype of socrates

console.log("Prototypal Inheritance 6 ?")

// only functions have the prototype property 
// every function has a prototype property
// we really use prototypes is using what we call constructor functions 
//super confusing  typeof object return "function" because well it has the prototype property
// the last object in the chain is this build in object.prototype
//object is a function because it has the prototype
// now object.prototype is what we call the base object 

// Everything in JS is object nd arrays nd functions in JS are objects they inherit thorugh 
// the prototype chain from base object

console.log("Exercise of prototypal inheritance ?")
// extend the functionality of a built in object
//**1 
// date object = > to have new method .lastyear()
// // which shows you last year 'YYYY' format.
// Date.prototype.lastYear = function() {
//   return this.getFullYear() -1;
// }
// new Date().lastYear()


// //**2 */
// // modify .map() to print ''  at the end of each item

// Array.prototype.map = function() {
//   let arr = [];
//   for(let i=0 ; i< this.length; i++) {
//     arr.push((this[i]) + "$")
//   }
//   return arr
// }
// console.log([1,2,3].map())






























































































