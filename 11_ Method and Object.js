var user={
    name: "Soumyadip",
    role: "Dev",
    loginCount: 99,
    couse: ["DS","Java"],

    buyCourse: function (name){
        this.couse.push(name)
    },
  
    getCount: function (){
        return this.couse.length
    },
}

console.log(user)
console.log(user.name)
console.log(user.role)
console.log(user.loginCount)
console.log(user["name"])

user.buyCourse("Java")
user.buyCourse("DS")
user.buyCourse("Spring")
user.buyCourse("Java")
user.buyCourse("DS")
user.buyCourse("Spring")
console.log(user.getCount())