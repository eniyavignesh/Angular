person ={sno:1,name: "Rahul",city:"Chennai"}

candidate = person // pass by reference

candidate.skills = ["Java","C#","PHP"]

member = {...person, city:"Mumbai" ,interests : ["Singing","Cricket","Gaming"]}

console.log(person)
console.log(candidate)
console.log(member)