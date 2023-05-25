person ={
    sno: 1,
    name:"Peter",
    city: "Chennai"
}
person.skills = ["java","css","Javascript"]
list = [34,345,345]
list["sno:"]=35
list["name:"]="Arjun"

for(let x in person)
 console.log(x, "=",person[x])

console.log(Object.keys(person))
console.log(Object.keys(list))



// for(let x in list)
// console.log(x,list[x])
