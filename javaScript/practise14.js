console.log("currying ?")
// it is technique of translating evaulation of the function take muktiple argument 
// into sequence of fucntions each with a single arguments 
// const mutliply = (a,b) => a*b;
// const curriedMultiply = (a) =>(b) =>a*b;
// const curriedMultiplyBy5 = curriedMultiply(5);


// 10 years
// curriedMultiplyBy5(5);
console.log("partial application ") 
// it is way for us to wll partiaylly apply a function 
// it's process of producing a function with smaller number of parameters 

// const mutliply =(a,b,c) => a*b*c;
// const partialMultiplyBY5 = mutliply.bind(null,5)
// partialMultiplyBY5(4,5);  // 200
// partially applied a paramter the parameter nd then i get to call
// the rest of the paramters B nd C like this so the main diffrence b/w cuuring nd partial
console.log(" Memoization ?")

// memoization ~~~ Caching 
// caching means is way to store values so u can use  them later on
// example : school bags 
// caching is just way for us speed up programs nd hold some piece of data in easily accessible
// memoization is a specific from of caching 

// let cache ={};
// function memoizedAddTo80(n) {
//     if (n in cache) {
//         return cache[n]
//     } else {
//         console.log("long time");
//         cache[n] = n + 80;
//         return cache[n]
//     }
// }

// console.log("1", memoizedAddTo80(5))    //  long time 1 85
// console.log("2", memoizedAddTo80(5))   // 2 85
// if i change the parameter it also calculate long time again // long time 1 85 // long time 1 86

// memorization is a specific form of caching that involves caching the return value
// of a function that is return value of this function based on its paramters


console.log("Compose nd pipe ")

// data --> fn --> data --> fn -->
//compose ability is a system desgin principle that deals with this 
// relationShip of components how  we can compose different 
// component of a factory function  example : conveyors belt in factory

// const compose = (f,g) =>(data) =>f(g(data))
// const multiplyBy3 = (num) =>num*3;
// const makePositive = (num) => Math.abs(num)

// bec of all those function are pure nd composed all 
// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)
// console.log(multiplyBy3AndAbsolute(-50))   // 150
// pipe is opposite flow of compose 

console.log("Arity ?")
// Arity means the number of arguments a function takes  




















