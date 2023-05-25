function add (a,b) {return a+b}
function sub (a,b) {return a-b}
function sample(option)

{
    if(option>=10)
    return add
    else
    return sub
}
console.log(sample(9)(43,35))


// / function sample(option){
//     console.log("sample logic")
// if(option==1)

//     return function(a,b){
//         return a*b;
    
//     }
// }//function return function

// // console.log(sample())
// console.log(sample()(4,2))


