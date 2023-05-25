function Sample(){
    console.log(this) // This: refers to object with which the current fuction is called 
    console.log(this.Sample.store)
}


a=30
Sample.store={sno:1,name:"vikky"}
Sample() //window.sample in case of browser
         //global.Sample