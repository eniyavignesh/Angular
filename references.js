a=[45,466,199]

// console.log(a)
b=a //passing by reference 
console.log(b)
b[4]=900
console.log(a)

c=[]
for(let x in a)
c[x]=a[x]
console.log(c)
c[7]=909
console.log(a)
console.log(c)