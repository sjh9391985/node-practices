const http = require('http');
const fs = require('fs');

const port = 8080;
const server = http.createServer(function(req , res){
    console.log(req.url);
    if(req.url === '/'){
        req.url = '/hello.html'
    }

    fs.readFile(__dirname + "/public" + req.url, function(error, data){
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        });
        res.end(data);
    });
})

server.listen(port,function(){
    console.log(`Http Server running on port ${port}`);
})