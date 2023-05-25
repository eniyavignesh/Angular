const a=900

function demoVariable(){
    a=30
      console.log("Within the outer range a is",a)
      {
  
          let a=80 //error local scope is already declared
          console.log("Within the block range a is",a)
         
      }
      console.log("Again within the outer range a is",a)
  }
  
  demoVariable()
  
  console.log(a)