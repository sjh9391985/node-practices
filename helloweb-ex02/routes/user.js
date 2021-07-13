const express = require('express');

const helloRouter = express.Router();

helloRouter.route("/join").get(function(req, res){
   res.render('user/join')
})

// 데이터 전송 값 확인.
helloRouter.route("/join").post(function(req, res){
   console.log(req.body);
   res.redirect("/");
})

helloRouter.route("/api").get(function(req, res){
   const vo = {
      no : 10,
      name : '둘리',
      email : 'dooly@gmail.com',
      gender : 'male'
   };

   res.writeHead(200, {
      'Content-Type' : 'application/json'
  });
  res.end(JSON.stringify(vo));
})

module.exports = helloRouter;