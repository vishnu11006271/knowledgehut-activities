let Employee = class{
    constructor(id,name,gender,salary){
        this.name = name;
        this.id = id;
        this.gender = gender; 
        this.salary = salary  
    }
    display(){
        console.log("Id: " + this.id +"Name: "+ this.name + " Gender: " + this.gender + " Salary: " + this.salary);
    }
};
module.exports = Employee;