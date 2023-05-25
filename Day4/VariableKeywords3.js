//Global, function scope and local scope
//console.log(a) will come error.
//var a=20
a=20

function printer(){
    //var a=35//function scope
    console.log("a:",a)
   var a=50
}

printer()
console.log("global a:",a)
