console.log(" How javaScript code is executed ?")
// everything in js happen inside of "execution Context"

// first globaal execution is creation then its created into 
// 2nd phase oneis memoery creation phase to  allocation  the memory to all var nd fun inside global phase 
//nd execution phase to execute the code
// the variable nd function like this 
// inside the memory phase we stored n : undefine square: {} sqaure2 : undfnd sqaure4 : undefnd 
// now execution phase is executed now n = 2 , then invoke the funciton sqaure(n)
//// when we invoke the function new execution context is created 
// flow the same step again  for understanding 
// after the function execution code is execution function execution deleted

var n = 2 ;
function square(num) {
    var  ans = num* num;
    return ans;
}
 var square2 = square(n);
 var square4 = square(4);
console.log(" call stack")
// it handle manage each nd everything like creation is created nd deleted it control nd managing the stack?
// its has own stack
//whole execution context is put into call stack
// when ever any function is invoke u put into the call stack  // e1 is popped out from the stack 
// call stack is managing the all execution context

// ***** call STACK MAINTAINS THE ORDER OF EXECUTION OF EXECUTION CONTEXTS

// other names of call stack are
// execution context, program , control,runtime,machine;[stack]













