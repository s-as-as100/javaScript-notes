console.log("Object.create vs class" )

console.log( " 4 ways of this ?")
// new binding this

// function person(name, age ) {
//     this.name = name;
//     this.age = age;

// }
// const Person1  = new person('xavier' , 55)

// // implict binding 
//  const person ={
//      name: 'Mohd',
//      age: 'age',
//      hi(){
//          return ' fourty five my ' + this.age  // this keyword is refer to person  
//      }
    
//  } 

 // expilict binding 
 

//  const person3 = {
//      name: 'Mohd',
//      age:'23',
//      hi: function() {
//          console.log('hi ' + this.setTimeout)
//      }.bind(window)
//  }
//  person3.h1()
//  // arrow function 
//   const person4 = {
//       name: " mohd",
//       age: '34',
//       h1: function() {
//           var  tiny = () =>{
//               console.log(' hi' + this.name)
//           }
//           return tiny;
//       }
//   }
  console.log("Inheritance ?")
//   // fairy tale game example
//     class Elf {
//         constructor(name, weapon) {
//             this.name = name;
//             this.weapon = weapon;
//         }
//         attack() {
//             return ' attack with' + this.weapon
//         }
//     }

//     const fiano = new Elf(' harry' , ' ninja star')
//     const piano ={...fiano}  // copy
//     console.log( fiano === piano)  // false because these object are not refrencing the same place in the 
//     // memory 
//     piano.attack()  // not a function how can i solve this problem? using ** inheritance **


    class Character {
        constructor(name, weapon) {
            this.name = name;
            this.weapon = weapon;

        }
        attack() {
            return ' attack with ' + this.weapon;
        }
    }


//     class Elf extends Character {
//         constructor(name,weapon,type){
    // if i log the this keyword its show error remember first we call super()
//             super(name, weapon);// call the constructor 
//             this.type = type
//         }
//     }

// const dolby = new Elf('king', 'queen', 'rat')
// dolby
// class Ogre extends Character {
//     constructor(name,weapon,color) {
//         super(name, weapon);
//             this.color = color; 
        
//     }
//     makeFort() {
//         return ' Make strongest fort in the World'
//     }
// }


// const shrek = new Ogre('harry', 'club' , 'black')
// console.log(shrek)
console.log(" Inheritance 2 ?")

// new keyword is create instances
//instanceof operator check the  variable value  to check the data type of the  value inside the variable
//example
// var bikes= ['yama', 'suzuki','buller'];

// syntax 
// bikes instanceof Array
//return boolean True or false



// console.log( dolby instanceof Character)  // true
// so remember that distinction instance is when we use the new keyword from 
// a class  we create am instance is essenntially creating a version of class inheritanc e

// inheritance in Js doesn't actually copy our functionality 
//instead it simply links up the prototype chain
// object innheritance from objects in Js
//in java nd C++ actually copy objects 













































