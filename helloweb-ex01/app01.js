const http = require('http');

const port = 8080;
const server = http.createServer(function(req , res){
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    res.end('<h1>Hello Web</h1>')
})

server.listen(port,function(){
    console.log(`Http Server running on port ${port}`);
})