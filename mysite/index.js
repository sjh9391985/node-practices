const express = require('express'); //require는 동기방식이기 때문에 코드의 중간에 하면 서버가 돌때 문제가 생길수 있다.(맨앞에 하는것을 권장)
const http = require('http');
const path = require('path');

const mainRouter = require('./routes/main');
const port = 8080;

// Application Setup
const application = express()
    // 1. static serve(체인걸음)
    .use(express.static(path.join(__dirname, "public")))

    // 2. request body parser
    .use(express.urlencoded({extended: true})) //application/x-www-form-urlencoded
    .use(express.json())    //application/json

    // 3. view engine setup
    .set("views", path.join(__dirname, "views"))
    .set('view engine', 'ejs')

    // 4. request router
    .all('*', function(req,res, next){ // 모든 메소드의 url 설정
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', mainRouter) // < - 이부분에서 계속 추가

    


// server setup
http.createServer(application)
    .on('listening', function(){
        console.info(`Http Server running on port ${port}`);
    })
    .on('error', function(error){
        if(error.syscall != 'listen'){
            throw error;
        }
        switch(error.code){
            case 'EACCESS':
                console.error(`Port: ${port} requires privileges`); //port를 열지 못햇을때
                process.exit(1); // 1번은 비정상종료
                break;
            case 'EADDRINUSE' :
                console.error(`Port: ${port} is already in use`); //port를 이미 사용하고 있을때
                process.exit(1); 
                break;
            default:
                throw error;
        }
    })
    .listen(port);
