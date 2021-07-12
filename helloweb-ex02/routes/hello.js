const express = require('express');

const helloRouter = express.Router();
helloRouter.route("/01").get(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hello01');
})

module.exports = helloRouter;