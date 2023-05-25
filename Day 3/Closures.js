// Javascript allows creating function within function
//The function which is defined with in a function is generally meant to be accessed only within the outer function not globally
//If fun a needs function b and it does not want anything outside the function to use it we can declare b as in inner function 

function outer(b) {
    state = 2
    // state++
    function inner(){
        console.log(state,"is accessible within inner")
        innerstate=2
        console.log(innerstate, "within innerfunction")
        state++;
        innerstate++;
    }
    console.log(b, "accessed within outer")
    //inner() ---- working version 
//     console.log(innerstate, "accessed within outer")//not possible 
return inner
 }
 result= outer("King")
 console.log(result)
 result()
 result()
 result()
 //outer.inner()
