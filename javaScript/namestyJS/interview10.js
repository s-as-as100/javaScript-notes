console.log(" What is a callBack function in JS ? ")
// u can take a function nd passed into another function 
// this function is passed into that function is called callback function 


// javasciprt is synchoronous nd single-threaded language 
function x( ){

}
x(function y() {
    // y function is callback function 

})

// setTimeout(function(){
//     console.log("I love JS")
// }, // this function is called call back function //5000)
// setineout function is not possibel to occured !!


// in any operation is blocked call stack is know as blocking main !!!


setTimeout(function(){
    console.log('timer')
},5000);


function x(y) {
    console.log("x")
y()
}
x(function y(){
    console.log("y")
})

// create event listener 
/// how many times buttoo=n clicked
let count= 0;
document.getElementById("clickMe")
.addEventListener('click',function y(){
    console.log(" Click me ", ++count)
})


// this above method is good bec using of global var used 

// this problem is solve by closure to hide the data
 function attachEventListeners() {
    let count= 0;
document.getElementById("clickMe")
.addEventListener('click',function y(){
    console.log(" Click me ", ++count)
})
 
 }
 attachEventListeners();




// INterview Question 
// garbage collectors nd removeEventListeners
/// why remove eventListerns 
// 1. heavy ( means it take memory )




































