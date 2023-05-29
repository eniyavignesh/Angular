//es2015 or later 

class Student {
//sno;
//name; //not legal in es2015

    constructor(sno,name){
        this.sno = sno
        this.name = name
    }
    display(){
        console.log ("Sno: ",this.sno, "Name: ",this.name)
    }
}

obj = new Student(12,"vikky")
obj1 = new Student(112,"Harry")

obj.display()
obj1.display()
//Note no access specified supported 