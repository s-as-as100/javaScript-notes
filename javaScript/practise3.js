console.log("functional Scope vs block Scope ?")
// scope means what variable we have access  nd  JS has function Scope
// every time we create a function hwe create a new execution context which has 
// its own variable Environment ?

// function Scope 

// if (5>4) { 
//     var secret = '12345';  if i change to var to let nd const it show refrence Error 
//     // let secret =  ' 12345'  //  you can only access it inside the block scope 
// }
//  secret;
 // you can access password beacuse JS uses function scope usually access the password like this 
 // this var variable is functional scope
 // well with ES6 they introduced the left and the concept keywords nd they allow us to use block scoping
 // example 
//   function loop() {
//      for( let i= 0;i<5; i++) {
//          console.log(i)
//      }
//      console.log('final',i)
//  }
//  loop();
// block scoping means declaring a variable not just inside a function  but around any curley brackets like



console.log("global Scope ?")

// {/* <script>var z=1</script> // this all JS is combined into one global Execution context in HTML file
// <script>var zz=1</script>   // it overwrite each other on same variables 
// <script>var zzz=1</script> // everything gets bunched together  // if there's any  duplicate 
// <script>var z2=1</script>// so this create a lot of possible bugs where we write different variables
// <script>var z=12</script> */} //  that's why is not declared all varaible in the global scope 
// global variable is bad because it create a lot of issues na how can we minimized that?
// to avoid this global variable issue and its called aand iffy or (an immediately invoked function expression)

console.log("IIFE ?")

// (function(){            // this bracket show it is function expression

// })();

// immerdiately expression simply allows us to call immediately as JS is execution it's going to define
// // what is it  and right afterwards with the brackets its going to call it
//  var z =1 ;
//  var s = (function(){  // s now return  an object
//      function a(){  // s   is one variable
//          return 5;    // one global variable but the good thing is that we can just 
//      }  // have one variable and this variable can be an object that contains many properties
//      return {  // that we might want to use and it only pollutes the global namespace
//          a: a,
//      }
//  })()

// function a(){
//     return 'hahah'
// }

console.log("this keyword ?")
// this is the object that the function is property of 

// Object.someFunc(this) // this is refers to that object of that the function
// this is refer to window object 
// this is equal to window 

// function a() {
// if put 'use strict' tag use strict was added to JS as way for us to avoid comman mistakes 
// it show undefined in console 
//     console.log(this)
// }
//  // well the function is a property of the window object 
// a()

// example of this 

//  const obj = {  // methods are functions that are inside of objects so the property and methods can 
//     // be accessed with  
//      name: "Arif",
//      developer() {
//          return 'mohd' + this.name
//      },
//      developer1() {
//          return this.developer() + '!'
//      }
//  }
//obj.developer()

//  there are two main benefits of this and why this keyword was created ?
//--1 = it gives method access to their object // developer is access to the object so that it can
// use properties nd methods within that objects so its siblings 
//--2 = execute same code for multible objects 
// example {
    // function imP() {
    //     console.log(this.name + '!')
    // }
    // const name ='Mohd';
    // const obj1 =  {
    //     name: 'Arif',
    //     imP :imP
    // }
    // const obj2 = {
    //     name: 'developer',
    //     imP :imP
    // }
 






//}






































































