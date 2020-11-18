var myMap=new Map()

myMap.set(1, "Soumya")
myMap.set(2, "Soumyadip")

console.log(myMap)

for(let key of myMap.keys()){
    console.log(key)
}
for(let val of myMap.values()){
    console.log(val)
}

myMap.forEach((value)=>console.log(value))

myMap.forEach((value,key)=>console.log(value,key))