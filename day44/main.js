let fs = require("fs");
let readline = require('readline-sync');
let writer = require('./empfs').writeEmployee;
let reader = require('./empfs').readEmployee;
let readById = require('./empfs').readEmployeeById;
let deleteById = require('./empfs').removeEmployeeById;
let options = '';
do{
options = readline.questionInt("\nOption are: \n 1 - Store\n 2 - Retrive All\n 3 - Retrive By Id\n 4 - Delete By Id\n 5 - quit\n Enter your choice: ");
switch(options){
    case 1:
        let empId = readline.questionInt("Enter id: ");
        let empName = readline.question("Enter name: ");
        let empSalary = readline.questionFloat("Enter salary: ");
        let emp = {id: empId, name: empName, salary: empSalary}
        writer(emp);
        break;
    case 2:
        let retriveAll = reader();
        retriveAll.forEach((person,index) => console.log(`${index+1} Name: ${person.name}, Id: ${person.id}, Salary: ${person.salary}`));
        // retriveAll.forEach((person) => console.log(person));
        break;
    case 3:readById();
        break;
    case 4:deleteById();
        break;
    case 5:console.log("Thankyou for using the app");
        break;
    default: console.log(`Not a valid Choice, Please enter choices from 1-5 as mentioned`);    
    }
}while(options!==5)