const express = require('express');

const helloRouter = express.Router();
helloRouter.route("/01").get(function(req, res){
   res.render('hello/01')
})

helloRouter.route("/02").get(function(req, res){
  
   res.render('hello/02', {
      no: req.query.no || "",
      email: req.query.email || ""
   })
})

module.exports = helloRouter;