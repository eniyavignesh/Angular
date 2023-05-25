names = ["Deva", "Vikky" , "Prabha"]

const [person1, person2,person3] = names

console.log(person1,person2,person3)

team = [ {name: "Raj" , role:"Lead"},
{name: "Hari" ,role:"Architect"},
{name:"Roshan",role:"Programmer"}]

const [member1,member2,member3] = team
console.log(member2)

const {name: member2Name} = member2

console.log(member2Name)