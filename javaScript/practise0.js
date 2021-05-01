console.log("Andre course ")

console.log("what is Js nd How it works?");

// javaScript is single threaded language  that is uses call back queue//


// javaScript Engine - it allow you to give this machine the jS file and this  machine is going to 
// understand this file and tel the commputer what to do display pictures

console.log(" Who created the first jS engine");
// Brenden Eich is American Technologist


console.log("Inside the Engine?")

// Js file --> parser( which divided the code into tree like sturcure//)
//-->AST(abstrct syntax tree) (going on the program or atleast breaks 
// thing down one by one )
//-->Interpreter --^ ByteCode(Is we translate and read the files line by
//line on the fly) -->Profiker(monitoring the Code.how to optimized this code
//) -->Compiler (it doesn't tra
//slate on the fly , compiler tries to understand 
// what we want to do and takes our language nd changes in 
// into something (lower level language))-->optimized code 

// the compiler nd profiler allows us to optimize this code as
// there are two ways to run Js using interpreter nd or compiler


// Babel is JS compiler that takes your modern jS code and returns 
// browser  compatible js 
//typeScript is as superSet of jS that compiles down to jS

console.log( "Inside V8 Engine")
// why Js used compiler rather than interpreter ?
// because in earlier jS google map is slow because using of Interperter if you can run the code 
//over and over again it take time that's why latest compiler is used for Js 
// a compiler doest n't need to repeat the translate for each pass through in that loop the 
// code generated 
//example of interpreter  function someCalculation(x,y) {
// return x+y;

//}
//  for (let 1=0;1<1000; 1++) {
//      someCalculations(5,4);   using the compiler it doesnot call function again it simply return 9
// interpreter nd compiler both are fast but unfortunately doesn't do any optimizations.
 //}
// we combine both jit compiler 


console.log("Comparing other languages");
// Some machine was not understant the byteCode 

console.log("is javaScript an interpreted languages?")
//yes but we also used compiler to optimized this code // but it depend on implementation 
// Technically it  depends on the implementation


console.log("Writing Optimized Code?")
// very careful about this function in Js  (Not to used In jS)
// > eval(), arguments, for in , with , delete 
// > hidden classes , Inline caching 
// this above thing make less code is optimized

 console.log("inline caching?")


//  function findUser(user) {
//      return `found ${user.name} .${user.lastname}`
//  }

//  const userData {
//      firstName : 'Johnson',
//      lastname:'Junior'
//  }

//  findUser(userData) // calling the function again nd again replaced by "johnson junior "
//  console.log("hidden classes ")

// function Animal(x,y) {
//     this.x = x;
//     this.y = y;

// }
// const obj1 = new Animal(1,2);
// const obj2 = new Animal(3,4);


// obj1.a = 30;
// obj1.b = 100;
// obj2.b = 30;
// obj2.a  = 100;
 

// the above code is actually going to make the compiler run slower or de optimize the code and that is something  is called hidden classes 


console.log("Why not just use machine code from  the begining ?")


// we have the standard binary executable format called Web assembly and this is what we didn't have1995 


console.log("call stack nd memory heap?")
//  memory heap nd call stack is used for  as place to store  and write the information because at the end of the day all programs
//  are just read nnd write operations

// call stack is checked where the code is it 
// memory heap  allocate nd  use memory nd release memory , where the memory location

// call stack as region in memory which operates in first in last out mode 
// our call stack now has the anonymous function ( no file name ) which was the global execution which was the


// call stack is store function nd variable  as your code executes at each  enrty of the stack also called the stack frame

// have call stacks nd heaps and these are the two locations thAT jS  remember the items 
// example to understand 
// const n1 = 20;
// const string ='some txt';
// const human = {
//     first : 'Mohd',
//     lastname : 'Arif'
// }

//  function subtractTwo(num) {
//      return num-2;
//  }
//   function calculate (){
//       const sumTotal = 4+5;
//       return subtractTwo(sumTotal);

//   }
//   calculate();
  




















































































































