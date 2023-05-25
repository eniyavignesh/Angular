function definition(fun) {
    console.log("first 20% of the logic")
    fun("Data Set 1")
    console.log("another 20% of the logic")
    fun("Data set2")
    console.log("We are done")
}//library 

//caller
//function call
definition(
    function(data){
        console.log("caller logic")
        console.log(data,"is processed by the caller")
    }
)