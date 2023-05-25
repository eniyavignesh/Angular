c=[34,12,2455]
a=[3435,34,34,656,35,[...c]]
console.log(a)


b=[...a] //copies the values of the array, not reference 
b[5]=[...a[5]]
//es2015 and later
c[3]=890
b[5][2]=9098

// console.log(a)
// console.log(b)
b[8]=9090
console.log(a)
console.log(b)
