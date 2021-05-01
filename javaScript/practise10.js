console.log(" benefits of programming paradigms oop nd Functional Prgmig ?")
// Benefits Are
// clear + understandable
// Easy to Extend
// Easy to maintain
// memory efficient 
// code Dry( dont repeat our code)

console.log(" OOP and FP")
// object oriented programming says that bringing together the date nd its behaviour in single location an object
// oop is like building a robot 
// functional programming says that data nd behaviour are distinctly different things nd should be kept separate for clarity 
// fp  says give  me data nd i'll act upon that data though functions nd i'll return something new from the data that you gave me 
// beauty of JS is that it is multi paradigm we can use both techniques to make our code easy to reason 
// about to make it clear nd more understandable

console.log("OOP introduction ?")

// object o p there's two main types there's class based programing lang nd prototype based prog lang
//oop is all about modelling real world objects nd relationships
console.log("OOPS  Factory Functions ?")

// we create fairy tales games there are so many different player

// if i change the weapon of elf1 nd 2 it take time to repeat code over nd over again 
// that's code is not dry then we solve this problem  by factory functions
 
// factory functions name suggest they create objects for us
// factory function that is a function that creates objects for us
 

// function createElf(name, weapon) {
//     return{
//         name: name,
//         weapon: weapon,
//         attack(){
//             return ' attack  with' +  weapon
//         }
//     }
// }
// const peter = createElf('Peter', 'Stone')
// there is one problem in factory function is that if i create 100 tiles nd attack method is 
// store in every time in memory now u can solve this problem by prototype inheritance 


console.log("OOP2: object.Create?")

// const elfFunctions = {
//     attack(){
//         return 'attack with' + this.weapon;

//     }
//}
// function createElf(name,weapon) {
//     let newElf = Object.create(elfFunctions)
//     // object.create is used what object does is it link between the elf fucntions nd the new elfwe
//     // just created we're doing all inheritance here
//     newElf.name = name;


//     newElf.weapon =weapon;
//     return{
//         newElf
//     }
// }

// const peter = createElf('peter', 'stones')
// // peter.attack = elfFunctions.attack convert into object.create
// console.log(peter.attack());


// object.create() is true prototype all  inheritance 

console.log("OOP# constructor Functions ?")

// construction function
// function Elf(name, weapon) {
//     this.name = name;
//     this.weapon= weapon;
// }
// const peter = new Elf("Peter" , 'stones')
// new keyword in Js is get used to the new keyword automatically return object for us 
// here nd it craete the elf constructor 

// any function that is invoked using the new keyword is called constructor function
// all function is start from captial letter is called contrucotr function

// remember this functions are special types of objects in jS its callable  object
// tht has code that can be invoked an optional name 
// arrow function is lexical scoped nd this is global objects 
console.log("tricky Js?")
 var a = new Number(5)
 a                    // output : a is typeof a is object becasue it used constructor functions 
 //
console.log(" ES6 class")
// when we use classes an instance happends when we call this class nd create an object out of this class

class Elf {
    constructor(name,weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return ' attack with' + this.weapon
    }
}


const peter = new Elf('Peter', 'stones')
console.log(peter.attack())
// classes are not necessarily the answer to evrything 
// classes are still just objects
// everything in jS is object
// jS have classess
// yes they do syntactic sugar but class keyword is still just prototype of all inheritance 




























































