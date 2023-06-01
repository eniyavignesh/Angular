function delayedProcess(input){
    console.log("function Started and process started")
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        if(input=="badinput")
        reject("A Bad Input")
        else
        resolve("Hello")
    }, 3000) // this part of the code is asyncchronous
});

}

result = delayedProcess("badinput")

// console.log(result)
result.then (
    function(data) {console.log(data,"is processed and received")},
    function(error) {console.log(error)}
)

console.log("other lines of code")

























//setTimeout carries two parameters
//1.callback function
//2.number(time represented in milliseconds)
//meaning: The call function will run after the time specied
//milli seconds

// setTimeout(function(){
//     console.log("Printing Content")
// },8000)