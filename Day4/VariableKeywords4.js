

function demoVariable(){
    a=30
    console.log("Within the outer range a is",a)
    {
        //var a=90
        let a=80
        console.log("Within the block range a is",a)
        {
            a=900
        }

    }
    console.log("Again within the outer range a is",a)
}

demoVariable()
console.log(a)