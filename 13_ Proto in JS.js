var user= function(name, course){
    this.name=name;
    this.course=course;
    this.getCourse=function(){
        console.log(name)
        console.log(course)
    },

    this.getCourse1 = () =>{
        console.log(name)
        console.log(course)

    }
}


var soumya= new user("Soumya","Java")
soumya.getCourse()
soumya.getCourse1()