let fs = require("fs");
let data = fs.readFileSync("./message.txt");
console.log(data);
let textData = data.toString();
console.log("-------------------------------");
console.log(textData);