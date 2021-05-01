console.log(" Functions are objects ?")
// when we invoke function we get this keyword in the arguments keyword and we learned that 
// arrguments is an array like object that has some wired behaviours for looping an iteration


// function constructor 
// const four =  new Function('return 4')
// four()
// functions are objects and they're special type of object that is callable object

console.log("functions are first citizen in JavaScript ?")
// function can be assigned to variables nd properties of objects 
//  var stuff = function() {}
// we can also pass fucntions as arguments into function 
// function a(receive another fn) {
//fn()
//}
// a(function() {console.log("hi")})
// we can return fucntions s a values from other functions 
// //function b() {
//     return function c () { console.log("hi")}
//}
// var d =b()
// //d()
// function a(param) {
//     return param }
// undefined
// a()
// undefined
// ES6 version 
// function a(param = 6) {
//      return param }
// undefined

console.log("Higher order function ?")
// higher order function are simply function that can take a function as Argument or a function that
// return another function
// Accept a function as a parameter 
// simple function to a function that accepts parameters to gain some superpowers
// why is useful ?
// suppose  we have company and there are so many employee how to authenticate 
// user id of every employee  write same code again nd again its not useful
// that we are using higher order function 

// const giveAccessTo = (name) => 'access greanted to' + name

// function letUserLogin(user) {
//     //++ we now tell // what data is use
//     let array = [];
//     for(let i = 0; i < 1000000; i++) {
//         array.push(i)
//     }
//     return giveAccessTo(user);
// }
// letUserLogin('Arif')

// function letAdminLogin(admin) {
//     let array = [];
//     for(let i =0 ; i <50000000; i++) {
//         array.push(i)
//     }
//     return giveAccessTo(admin)
// }
// instead of writing above 
// you can use this code way 
// function authenticate(verify) {
//     let array=[];
//     for(let i = 0; i< verify; i++){
//         array.push(i)
//     }
//     return giveAccessTo(person.name)
// }
// function sing(person) {
//     return " hi developer " + person.name
// }

// function letPerson(person, fn) {
//     //++ tell it what data to user + function
//     if(person.level==="admin"){
//         return fn(person)
//     } else if(person.level ==='user') {
//         return fn(person)
//     }
// }
// letPerson({level:'admin', name:'Mohd'} , sing)

// higher order function is this ability to tell the function what to do during invocation 
// we're able to have little bit more flexilblity than we had before 

// example of higher order function 
// const multiplyBy = function(num1) {  // multiplyby is higher order function 
//     return function(num2){
//         return num1*num2;
//     }
// }
// const multiplyByTwo = multiplyBy(2);
// multiplyByTwo(2);

// convert above code into arrow function 
const  multiplyBy = (num1) => (num2) => num1*num2;
// each bracket show to how to call functions()























































