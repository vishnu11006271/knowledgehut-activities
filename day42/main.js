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
    ask  = read.question("Do you want to continue");
}while(ask!=="quit")
console.log(personList);




