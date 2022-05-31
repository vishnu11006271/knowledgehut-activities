let user = require("./modules");
let read = require("readline-sync");
let ask = "";
let personList = [];
do{
    user.name1 = read.question("Enter your name: ");
    user.age = read.questionInt("Enter your age: ");
    user.gender = read.question("Enter your gender: ");
    let person = new user(user.name1,user.age,user.gender);
    personList.push(person.display());
    ask  = read.question("Enter any key to continue |Enter quit to exit:> ");
}while(ask!=="quit")
personList.forEach((person) => console.log(person));