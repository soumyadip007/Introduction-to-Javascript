class User{
    name = ""
    yo=""
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    #courseList=[];  //Now it's a private variable

    getInfo(){
        return {name:this.name, email:this.email};
    }

    enroll(name){
        this.courseList.push(name);
    }

    getCourseList(){
        return this.courseList
    }
}

let soumya=new User("Soumya","soumyadip.note")
console.log(soumya)
//console.log(courseList)
