let user = class{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;   
    }
    display(){
        return "Name: "+ this.name + " Age: " + this.age + " Gender" + this.gender;
    }
};
module.exports = user;