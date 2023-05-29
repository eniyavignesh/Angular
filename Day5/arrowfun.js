function library(fun){
    var dataitems = [" Python Program", "Java Program","c# program"]
    fun(dataitems[Math.round(Math.random()*2)])
}


class DataHolder {
    constructor (data) {
        this.data = data
    }

    show(){
        console.log("Data-->", this.data)
    }

    changeData(){
        // litfun(function(value){
        //     this.data = value// this is undefined 
        // }.bind(this))
        libfun((value)=> {
            this.data = value
        })
    }
}

obj = new DataHolder("Javascript Program")
obj.show()
obj.changeData()
obj.show()
