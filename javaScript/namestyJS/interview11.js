console.log("Asynchoronous JS nd Event Loop?")
// we have browser nd browser can access many things like 
// timers, bluetooth , UI , nd many other things

// these blow power in browser 
// web Api are access all power of browser
// 1. fetch(), 2.setTimeoUt, 3. console, 4 local Storage ,5. DOM APIs 6. location
// settimeOut nd Docnument.get (DOM API) is not a part of JS 

// u can access all browser power inside the call stack is global object(Window!)


console.log("start");


document.getElementById("#btn")
.addEventListers("click", function x() {
    console.log("btn is clicked")
})

console.log("End ")
// document.getId is regester in webApi environment call back wait until the user is clicked 
/// whenver user click a button is not directly pushed into call Stack
// it goes into call back queue then go into the call stack then execute it 



console.log(" Event Loop")

// continues monitor  call stack and call back queue

// why we need callBack queue ...?
// whenever user clicked multiple time click on button 


// micro task queue is higher priority then callback queue
// all the callback function is into the microtask  queue (mutation ,promise ) are into microtask queue
// starvation of queque is callback function again itslef nd again 

console.log("start");

setTimeout( function cbf( ){
 console.log(" Timers")
}, 5000);

fetch("http:// api.net.com")
.then(function cbt(){
    console.log(" I LOVE JS")
})

console.log("End")


//*********** Java Script Engine architecture vs V8 engine  */

// javaScript engine run environment  time it can access all things is to be required 
// to run JavaScipt 

// Inside javaSciprt run time engine we have JS Engine,  webAPI, event loop , call backqueue , micro task quque 
/// jrtmE is nothing without JS engine
//Js Engine
// list of engine all browser have own JS engine chrome (v8 engine )

// first JS engine is discovered by nd engine also Briden Eich : SpiderMOnkey 
// JS engine is not a machine 
// JS is jit compiler Language 



















