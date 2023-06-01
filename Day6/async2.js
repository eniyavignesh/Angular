function giveMeWhatIask(input){

    var fruits = ["Apple","Banana","Papaya","Gauva","Orange"]
    
    var vegetables= ["Carrot","Potato","Onion","Chilli","Beans"]
    
    return new Promise(function(resolve,reject){
    
   setTimeout(function(){
    
   if(input=="fruits")
    
   resolve(fruits[Math.round(Math.random()*5)])
    
   else if(input=="vegetables")
    
   resolve(vegetables[Math.round(Math.random()*5)])
    
   else
    
     reject ("only fruits or vegetables as input please")
    
     },2000)
    
    })
    
    }
    
    function callerlogic(){
    
    
    
    
     var result=giveMeWhatIask("fruits")
    
     result.then((data)=>{console.log("received",data)},
    
     (error)=>{console.log("rejected with meassage",error)})
    
    console.log("follow ep logic")
    
    }
    
    callerlogic()