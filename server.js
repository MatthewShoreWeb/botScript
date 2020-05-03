const http = require('http');
const url = require('url');
const fs = require('fs');




const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // fs.appendFile('email.txt', url.parse(req.url, true).query.email + ' ' + url.parse(req.url, true).query.password + '\n', function (err) {
    //     if (err) { 
    //         res.statusCode = 404; 
    //     }
    // });
});

server.listen(8000, console.log('Server Running @ http://localhost:8000/.'));