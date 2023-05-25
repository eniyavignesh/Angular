a= [34,356,29,209]

a[8]=989
//not usefull if you have properties(string index or object )to be 
//iterated 
//not good if elements are placed in random indexs
// for(let x=0;x<a.length; x++)
// console.log(a[x])
//the most appropriate for loop for processing 
//arrays with random index and array with properties 
a[-349] ="Roger"
b = {sno:1, name:"Roger"}
a[JSON.stringify(b)]= "javascript object value part"

// for(let x in a)
//  console.log(x,a[x])

for(let x of a)
console.log(x)