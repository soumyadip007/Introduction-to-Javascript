var user= {
    name:"",
};


var soumya=Object.create(user)
console.log(soumya)

soumya.name="Soumya"

console.log(soumya)


var john=Object.create(user,{
    name:{value:"john"}
})
john.name="john"

console.log(john)