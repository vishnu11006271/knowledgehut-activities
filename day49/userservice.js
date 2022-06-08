let fs = require('fs');
function updateUser(usr) {
    let counter = 0;
    if(checkFileExists) {
        let jsArr = readUser();
        for(let i=0;i<jsArr.length;i++){
            if(usr.id ==jsArr[i].id){
                jsArr[i]=usr;
                let jsonString = JSON.stringify(jsArr);
                fs.writeFileSync('userdetails.json', jsonString); 
                counter=1;
            }
        } 
    }
    return counter;
}
function writeUser(usr) {
    if(checkFileExists) {
        let jsArr = readUser();
        usr.id = jsArr.length+1;
        let x = usr;
        jsArr.push(x);
        let jsonString = JSON.stringify(jsArr);
        fs.writeFileSync('userdetails.json', jsonString);
        return x;  
    }   
}
function readUser() {
    if(checkFileExists) {
        let data = fs.readFileSync("userdetails.json");
        let dataString = data.toString();
        let jsArr = JSON.parse(dataString);
        return jsArr;
    }
}
function checkFileExists() {
    if(!fs.existsSync('userdetails.json')) {
        let arr = [];
        let arrString = JSON.stringify(arr);
        fs.writeFileSync("userdetails.json", arrString);
    }
    return true; 
}
function readUserById(data) {
    let personObject = {};
    if(checkFileExists) {
        let dataString = fs.readFileSync("userdetails.json").toString();
        let jsArr = JSON.parse(dataString);
        for(let i=0; i<jsArr.length;i++){
            if(data == jsArr[i].id){
                personObject = jsArr[i];
                return personObject;
            } 
        }
    }
}
function removeUserById(data) {
    let newFile = [];
    if(checkFileExists) {
        let dataString = fs.readFileSync("userdetails.json").toString();
        let jsArr = JSON.parse(dataString);
        for(let i=0; i<jsArr.length;i++){
            if(data == jsArr[i].id){
                jsArr.splice(i,1);
                let jsonString = JSON.stringify(jsArr);
                fs.writeFileSync('userdetails.json', jsonString);
                newFile = readUser();
                }
        }   
    }
    return newFile;
}
module.exports = {writeUser, readUser, readUserById, removeUserById, updateUser}