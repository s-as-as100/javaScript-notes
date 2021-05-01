console.log(" What is Blocked Scope ?")

// BLOCK?
// {
//     // this is block is also component statement (combined multiple JSin group)
// }


//BLOCK SCOPE?
//{
 // what all variable and functions  we can access inside the block ..

//}

// {
//     var a= 10;
//     let b = 11;   {
//         let nd const are blocked scoped that means they are separated in memory space
// reserved fot this block
// no longer to access let  nd var outside the blocked scope 
//     }
//     const c=12;

// }

console.log(" What is shadowing in JS ? ")
var a = 10;  // let b =14 
 {
     var a = 12;
     let b = 13;
     const c = 14;
     console.log(a)   // 12 due to shadowing 
     console.log(b)  // 13
 }

 console.log(a)  // 12 because  both are pointing to same memory (global space) location 
 console.log(b) // 14 due to both b have different scope 
 //illegal Shadowing
 // let nd var not shadowing 
 //but var nd let is shadowing 
 // example
 // let a =12;
 //{ var a = 13}  // already declared error 
 // let nd let are shadoiwng




























