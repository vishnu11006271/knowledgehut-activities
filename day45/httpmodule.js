let http = require('http');
const port = 8181;
let server = http.createServer((req,res) => {
    res.write("Welcome to my app");
    res.end();
});
server.listen(port, () => console.log(`Server started at port number: ${port}`));