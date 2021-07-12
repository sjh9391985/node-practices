const express = require('express');

const mainRouter = express.Router();
mainRouter.route("").get(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('main');
});

module.exports = mainRouter;