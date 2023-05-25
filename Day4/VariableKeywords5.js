

function demoVariable(){
   //let a=30
   a=30
    console.log("Within the outer range a is",a)
    {
        //var a=80 error local scope is already declared
        let a=80 //let only will work in inner block it wont work on outer block
        console.log("Within the block range a is",a)
       
    }
    console.log("Again within the outer range a is",a)
}

demoVariable()
console.log(a)