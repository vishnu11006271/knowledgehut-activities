let fs = require("fs");
let Employee = require("./module1");
let data  = fs.readFileSync("./simple.txt");
let dataString = data.toString();
let splitString = dataString.split("|");
let obj = new Employee(...splitString);
obj.display();