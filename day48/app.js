let reader = require('./empservice').readEmployee;
let update = require('./empservice').updateEmployee;
let deleteById = require('./empservice').removeEmployeeById;
let readById = require('./empservice').readEmployeeById;
let writer = require('./empservice').writeEmployee;
let express = require('express');
let app = express();
let port = 9091;

app.listen(port, () => console.log(`Server started at ${port}`));

app.post("/store/:id/:name/:salary", (request, response) => { 
    // reading id, by default path parameters will be in string
    let empId = parseInt(request.params.id);
    let empName = request.params.name;
    let empSalary = parseFloat(request.params.salary);
    let emp = {id : empId, name : empName, salary : empSalary};
    const check = writer(emp);
    check==1?response.json(`Emp Id: ${empId} already exit `):response.json(`Data stored successfully in the database`);
    response.json(emp); 
});
app.get("/fetch/:id", (request, response) => {
    let eId = parseInt(request.params.id);
    let empObj = readById(eId);
    typeof(empObj)=='object'? response.json(empObj)
    :response.json(`Emp Id: ${eId} doesn't exit `);
});
app.get("/fetch", (request, response) => {
    let allEmployees = reader();
    const obj = Object.assign(allEmployees);
    response.json(obj);
});
app.delete("/remove/:id", (request, response) =>{
    let eId = parseInt(request.params.id);
    let empArr = deleteById(eId);//returning array
    console.log(empArr);
    empArr.length == 0? response.json(`Emp Id: ${eId} doesn't exist.`)
    :response.json(`Emp Id: ${eId} deleted successfully from database.`);
});
app.put("/update/:id/:salary", (request,response) =>{
    let retriveAll = reader();
    let empId = parseInt(request.params.id);
    let empSalary = parseFloat(request.params.salary);
    let updatedEmpObject = {};
    for(let i = 0; i < retriveAll.length; i++) {
        if(empId==retriveAll[i].id){
            retriveAll[i].salary = empSalary;
            updatedEmpObject = retriveAll[i];
            update(updatedEmpObject);
            response.json(updatedEmpObject);
        }else{
            error = {errorMessage: "Data does not exist to modify"};
            response.json(error);
        }    
    }
});