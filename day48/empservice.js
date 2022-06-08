let fs = require('fs');
function updateEmployee(emp) {
    let counter = 0;
    if(checkFileExists) {
        let jsArr = readEmployee();
        for(let i=0;i<jsArr.length;i++){
            if(emp.id ==jsArr[i].id){
                jsArr[i]=emp;
                let jsonString = JSON.stringify(jsArr);
                fs.writeFileSync('emp.json', jsonString); 
                counter=1;
            }
        } 
    }
    return counter;
}
function writeEmployee(emp) {
    let counter = 0;
    if(checkFileExists) {
        let jsArr = readEmployee();
        for(let i=0;i<jsArr.length;i++){
            if(emp.id ==jsArr[i].id){ 
                counter=1;
            }
        }
        if(counter != 1){
            jsArr.push(emp);
            let jsonString = JSON.stringify(jsArr);
            fs.writeFileSync('emp.json', jsonString);
        }  
    }
    return counter;
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
function readEmployeeById(data) {
    let personObject = {};
    if(checkFileExists) {
        let dataString = fs.readFileSync("emp.json").toString();
        let jsArr = JSON.parse(dataString);
        for(let i=0; i<jsArr.length;i++){
            if(data == jsArr[i].id){
                personObject = jsArr[i];
                return personObject;
            } 
        }
    }
}
function removeEmployeeById(data) {
    let newFile = [];
    if(checkFileExists) {
        let dataString = fs.readFileSync("emp.json").toString();
        let jsArr = JSON.parse(dataString);
        for(let i=0; i<jsArr.length;i++){
            if(data == jsArr[i].id){
                jsArr.splice(i,1);
                let jsonString = JSON.stringify(jsArr);
                fs.writeFileSync('emp.json', jsonString);
                newFile = readEmployee();
                }
        }   
    }
    return newFile;
}
module.exports = {writeEmployee, readEmployee, readEmployeeById, removeEmployeeById, updateEmployee}