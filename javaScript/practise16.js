console.log("composition Vs inheritance ?")
// inheritance is super class that is extended to smaller piece that 
// add or overwrite 
// what it is
//tight coupling problem
// fragile base class problem 
// hierarchy
// gorilla banana problem(it means subclass innheritance all methods and action which are not used in subclass
// due to inhertiance) 

// Inheritance we have parent class if i change or add any method inside prent class 
// All child parent it will effects // u can chnge things in one place
// and will have rippling effects into other can be benefits where u dont 
// you keep ur code dry but can also cause a alot of probems so u have all
// these independence 

// compostition is smaller piece that are compined to create somthing bigger
// what it has ( what abilities are)
//u can sfix this problem by composition 
// function getAttack(character) {
//  return Object.assign({}, character ,{attackFn: ()=>{{}}})
// }

// function Elf(name,weapon,type) {
//     let elf = {
//         name,
//         weapon,
//         type
//     }
//     return getAttack(elf)
// }

// Elf = attack() + sleep()
// Ogre = attack() + makeFort() + Sleep()

console.log(" OOP Vs FP")
// fp is all about performing many different operation for which data is fixed 
// OOP is all about few operationson comman data
// fp  stateless 
// OOP is statefull ( modify the state)
// fp is pure functions( it doesn't effect any other functions 
//OOP  have sideEffects) this is popular because of pure 
//fp is more declerative( its about what we ant to be doing)
// OOP imperative


// In all programs there are two primary components
// the data nd behaviour 
//OOP says hey bring together the data nd behaviour 
//in a single location  called Object or class
//In Fp says that data nd behaviour are distincly different things 
// and should be kept separate for clarity































