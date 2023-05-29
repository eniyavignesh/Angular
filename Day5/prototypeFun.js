function student(sno,name) {
    this.sno= sno
    this.name= name
    console.log(this)
}

student.prototype.display = function(){
    console.log("Sno: ",this.sno,"Name:",this.name)
}
// Student(1,"vikky") //window scope or global scope

obj1 = new student(1,"Vikky") //the output will be appear in wed under window
obj2 = new student(2, "Harry")
//student will behave like a class and student() will behave like constructor

obj1.display()
obj2.display()

