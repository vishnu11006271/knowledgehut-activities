let fs = require('fs');
let read = require('readline-sync');
function writeEmployee(emp) {
    if(checkFileExists) {
        let jsArr = readEmployee();
        jsArr.push(emp);
        let jsonString = JSON.stringify(jsArr);
        fs.writeFileSync('emp.json', jsonString);
        console.log("Data successfully added to emp.json file");
    }
}
function readEmployee() {
    if(checkFileExists) {
        let data = fs.readFileSync("emp.json");
        let dataString = data.toString();
        let jsArr = JSON.parse(dataString);
        return jsArr;
    }
}
function checkFileExists() {
    if(!fs.existsSync("emp.json")) {
        let arr = [];
        let arrString = JSON.stringify(arr);
        fs.writeFileSync("emp.json", arrString);
    }
    return true; 
}
function readEmployeeById() {
    if(checkFileExists) {
        let counter = 0;
        let ask = read.questionInt("Enter Employee Id: ");
        let dataString = fs.readFileSync("emp.json").toString();
        let jsArr = JSON.parse(dataString);
        for(let i=0; i<jsArr.length;i++){
            if(ask == jsArr[i].id){
                console.log(`Name: ${jsArr[i].name} Salary: ${jsArr[i].salary}`);
                counter +=1;
                } 
            }
        if(counter == 0){
            console.log("Not a valid Id ");
        }
    }
}
function removeEmployeeById() {
    if(checkFileExists) {
        let counter = 0;
        let ask = read.questionInt("Enter Employee Id: ");
        let dataString = fs.readFileSync("emp.json").toString();
        let jsArr = JSON.parse(dataString);
        for(let i=0; i<jsArr.length;i++){
            if(ask == jsArr[i].id){
                jsArr.splice(i,1);
                console.log(`Deleted...`);
                counter++;
            }
        }
        if(counter==0){
            console.log("Not a valid Id ");
            console.log("No changes made to emp.json file\n"); 
        }else{
            let jsonString = JSON.stringify(jsArr);
            fs.writeFileSync('emp.json', jsonString);
            console.log("Updated emp.json file is as below\n");
            let newFile = readEmployee();
            newFile.forEach((person) => console.log(person));
        }
        
    }
    
}
module.exports = {writeEmployee, readEmployee, readEmployeeById, removeEmployeeById}