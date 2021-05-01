console.log("Dynamic Scope nd Lexical Scope ")

// const a = function() {
//     console.log('a', this)
//     const b = function() {
//         console.log('b', this)
//         const c = {
//             hi: function(){
//                 console.log('c',  this)

//             }
//         }
//         c.hi()
//     }
//     b()
// }
// a()

//window.a(b())

// const obj = {
//     name : 'Mohd',
// sing() {
// console.log('a' ,this);
// var anotherFunction = function() {
//     console.log('b',this)
// }
// anotherFunction() // return anotherfucn.bind(this)
// }
// }

// // output 
// a > { name: 'Mohd' , sing:f}
// b> window {} // because this keyword is not lexical scope that is it doesn't matter where it is run
//it matter how the function Called 
// Everything iN jS is lexical Scoped how you write it determine what we have available except for the 
// this keyword is acutally dyanamic scoped that it doesn;t matter where it run it maatter how the 
// function is called 
// there are two ways to solve this problem 
//1. arrow function has lexical this behaviour unlike normal functions
//2. bind method  // obj.sing()()
//3 refrence object 
console.log("call(),apply(), bind()")

// function a() {
//     console.log("hi")
// }
// a.apply() = a.call() =  a()// same (shorthand)
// all function when created have this property called call that allows us to call
// the function
// call is used to borrow the method of one object to another 
//  const wizard = {
//      name: "harry",
//      health : 20,
//      heal(num1,num2) {
//          return this.health  += num1+num2;
//      }
//  }

//  const archer = {
//      name: 'Robin Hood',
//      health : 20
//  }

// console.log("1", archer)
//  wizard.heal.call(archer, 40,40 )
// console.log("2",archer)

console.log("difference b/w call nd apply vs Bind")
// is that instead of call that just takes parameter , apply take an array of parameter [50,30]


// bind allows us to use what we have here you see bind unlike call nd apply
// thay immediately runs a function binds return a new function with a certain context nd parameter
// unlike calling apply it doesn't run the function it return a function 

//  const healArcher = wizard.heal.bind(archer, 100,30)
//  healArcher()
// bind allows us to store the this keyword
// call nd apply methods are useful for borrowing methods from an object 
// while bind is useful for us call
console.log("function currying ?")
// i was able to reuse a piece of code give it a partial paramter nd creates these funcitons
// function mul(a,b) {
//     return a*b;
// }
// let multiplyByTwo =  mul.bind(this,2);
// console.log(multiplyByTwo(3))

console.log("context vs Scope ?")
// scope means what is the variable acccess of a function when it is invoked
//context on the other hand is more about based context says what is the value of this keyword
//which is refrence to the object that owns that current executing code so context nd //
// context is most often determined by how  a function is invoked with the value of this
// keyword nd scope refers to the visiblity of variable 



















































