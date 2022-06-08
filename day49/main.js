let reader = require('./userservice').readUser;
let update = require('./userservice').updateUser;
let deleteById = require('./userservice').removeUserById;
let readById = require('./userservice').readUserById;
let writer = require('./userservice').writeUser;
let parser = require('body-parser');
let express = require('express');
let url = require('url');
let app = express();
let port = 9091;

app.use(parser.json());
app.listen(port, () => console.log(`Server started at ${port}`));

app.post("/store", (request, response) => {
    let body = request.body;
    let userObject = writer(body);
    response.json(`User with an id: ${userObject.id} Stored`);
    console.log(userObject); 
});

// app.get("/user", (request, response) => {
//     let allUsers = reader();
//     const obj = Object.assign(allUsers);
//     response.json(obj);
// });

app.get("/user/:id/:password", (request, response) => {
    let uId = parseInt(request.params.id);
    let pass = request.params.password;
    let userObj = readById(uId,pass);
    pass == userObj.password? response.json(userObj)
    :response.json(`Sorry uId: ${uId} or Password: ${pass} is incorrect’ `);
});

app.get("/user", (request, response) => {
    let urlString = url.parse(request.url, true);
    let query = urlString.query;
    if(query.id != undefined || query.password != undefined){
        let userObj = readById(query.id,query.password);
        query.password == userObj.password? response.json(userObj)
        :response.json(`Sorry uId: ${query.id} or Password: ${query.password} is incorrect’ `);
    }else{
        let allUsers = reader();
        const obj = Object.assign(allUsers);
        response.json(obj);
    }
    
});

app.delete("/remove/:id", (request, response) =>{
    let uId = parseInt(request.params.id);
    let userArr = deleteById(uId);
    userArr.length == 0? response.json(`Emp Id: ${uId} doesn't exist.`)
    :response.json(`User Id: ${uId} deleted successfully from database.`);
});
app.put("/update/:id/:password", (request,response) =>{
    let retriveAll = reader();
    let uId = parseInt(request.params.id);
    let userPassword = request.params.password;
    let updatedEmpObject = {};
    for(let i = 0; i < retriveAll.length; i++) {
        if(uId==retriveAll[i].id){
            retriveAll[i].password = userPassword;
            updatedEmpObject = retriveAll[i];
            update(updatedEmpObject);
            response.json(updatedEmpObject);
        }else{
            error = {errorMessage: `Id: ${uId} is not found. `};
            response.json(error);
        }    
    }
});