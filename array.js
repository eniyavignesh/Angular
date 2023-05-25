a=[12,53,89,890,34]
console.log(a[5])//undefined

console.log(a[234])//undefined

a[2]=90//legal, works 
a[1022]=890 //legal

console.log(a)

console.log(a[87])// undefined

a[-23]=3489
a['place']="chennai"
b={sno:1,name:"vikky"}
a[b] = "javascript obejct"
a[true]="true value"



console.log(a.length,"is the size of array")
console.log(a)
console.log(b) 