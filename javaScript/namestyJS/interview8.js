console.log(" setTimeout interview Qeustion of closure ?")


function x() {
    var i = 4;
    setTimeout(() => {
        console.log(i)
    }, 2000);
    console.log(" I Love JS")
}
x()  

// I love JS
// 4 after 2 second 
  function y() {
      for(var i =1; i<=5; i++){     // solve this problem by using let instead of var 
        // new copy of i together 
        // let is used bec let create a new copy every time 
        // each nd evry time settimeout is call this function form a closure with a new variable itself 
        // simple term u can assume that each nd every time function is call it refernce to different memory location 
        // separte copy of i in the scope 
        setTimeout(() => {
            console.log(i)
        }, i* 1000);   // remember the refrence of i not value of i due to closure
       
      }
      console.log(" I Love JS")
  }
  y()
  // output is
  // i love js
  // 6  6 6 6 6 

// ****** Interview Asked u can use only VAR not used let how can u solve this 
// by the help of closure 
function z() {
    for(var i = 1; i<= 5; i++){
        function close(x) {
            setTimeout(() => {
                console.log(x)
            }, x * 1000);
        }
        close(i)
    }
  console.log(" I Love  JS")
}
x()


//*********INTERVIEW QUESTIOn */

 function outest() {
     var c =20
function outer(b) {
    var i =1;
    function inner(){
console.log(a,b,c)
    }
    //var i =1
    // if i put var i =1 here it form closure because it indepent of location of var 
    // if i change var to let it form closure let is blocked scope 
    // if i put parameter is behave same , outer(b)
    return inner;
}
return outer
 }
 // if i put a = 100 ( confict name ) result same beacuse its not going to deep heirarchy

 var close = (outest())("Hello")

close()

// disadvantage 1, overconsumption memory uses, memory leak 

// what is garbage collector   : is like program in JS engine or browser which up the unutilizd memory 
// freeze out memory if vars are not accessbile in the code 



















































