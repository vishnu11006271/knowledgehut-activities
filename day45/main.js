let readline = require('readline-sync');
let writer = require('./empservice').writeEmployee;
let reader = require('./empservice').readEmployee;
let readById = require('./empservice').readEmployeeById;
let deleteById = require('./empservice').removeEmployeeById;
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
        console.log("Data successfully added to emp.json file");
        break;
    case 2:
        let retriveAll = reader();
        retriveAll.forEach((person,index) => console.log(`${index+1} Name: ${person.name}, Id: ${person.id}, Salary: ${person.salary}`));
        break;
    case 3:
        let retriveId = readline.questionInt("Enter Employee Id: ");
        let myObj = readById(retriveId);//returning object
        typeof(myObj)=='object'? console.log(`Name: ${myObj.name}, Salary: ${myObj.salary}`)
        :console.log(`Emp Id: ${retriveId} doesn't exit `);
        break;
    case 4:
        let deleteId = readline.questionInt("Enter Employee Id to delete: ");
        let myArr = deleteById(deleteId);//returning array
        myArr.length == 0? console.log(`Emp Id: ${deleteId} doesn't exit `)
        :console.log(`Emp Id: ${deleteId} deleted successfully`);
        break;
    case 5:
        console.log("Thankyou for using the app");
        break;
    default:console.log(`Not a valid Choice, Please enter choices from 1-5 as mentioned`);    
    }
}while(options!==5)