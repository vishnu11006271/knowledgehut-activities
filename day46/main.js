let readById = require('./empservice').readEmployeeById;
let reader = require('./empservice').readEmployee;
let deleteById = require('./empservice').removeEmployeeById;
let writer = require('./empservice').writeEmployee;
// import http module
let http = require("http");
// import the url module
let url = require("url");
// define a port number
let port = 9091
// server instance & starting it 
http.createServer((request, response) => {
    let urlText = request.url;
    // creating the url object
    let urlObject = url.parse(urlText, true);
    // extract the query parameter
    let param = urlObject.query;
    if(urlText !='/favicon.ico') {
        console.log(urlText);
        response.writeHead(200, {'content-type': 'text/html'});
        response.write(`<h1>Using MVC Architecture</h1>`);
        let fetchById = '/fetch?id='+param.id;
        let fetchAll = '/fetchAll'
        let deleteId = '/delete?id='+param.id;
        let store = '/store?id='+param.id+'&name='+param.name+'&salary='+param.salary;
        switch(urlText){
            case fetchById:
                let empObj = readById(param.id);
                typeof(empObj)=='object'? response.write(`Name: ${empObj.name}, Salary: ${empObj.salary}`)
                :response.write(`Emp Id: ${param.id} doesn't exit `);
                response.end();
                break;
            case fetchAll:
                let retriveAll = reader();
                console.log(retriveAll);
                let html = "<table border='4' width = 400><tr><td>SLno</td><td>Name</td><td>Id</td><td>Salary</td></tr>";
                for (let i = 0; i < retriveAll.length; i++) {
                    html+="<tr>";
                    html+="<td>"+(i+1)+"</td>"
                    html+="<td>"+retriveAll[i].name+"</td>";
                    html+="<td>"+retriveAll[i].id+"</td>";
                    html+="<td>"+retriveAll[i].salary+"</td>";
                    html+="</tr>";
                }
                html+="</table>";
                response.write(html);
                response.end();
                break;
            case deleteId:
                let empArr = deleteById(param.id);//returning array
                empArr.length == 0? response.write(`Emp Id: ${param.id} doesn't exit `)
                :response.write(`Emp Id: ${param.id} deleted successfully`);
                response.end();
                break;
            case store:
                let emp = {id: parseInt(param.id), name: param.name, salary: parseInt(param.salary)};
                const check = writer(emp);
                check==1?response.write(`Emp Id: ${param.id} already exit `):response.write("Data successfully stored to emp.json file");
                response.end();
                console.log(check);
                break;
        }
    }
}).listen(port, () => 
    console.log(`Server running at ${port}`));

