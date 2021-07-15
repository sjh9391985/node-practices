const express = require('express'); //require는 동기방식이기 때문에 코드의 중간에 하면 서버가 돌때 문제가 생길수 있다.(맨앞에 하는것을 권장)
const session = require('express-session');
const http = require('http');
const path = require('path');
const dotenv = require('dotenv');


// Environment Variable(환경변수)
dotenv.config({ path: path.join(__dirname, 'config/app.env') })
dotenv.config({ path: path.join(__dirname, 'config/db.env') })

const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');
const guestbookRouter = require('./routes/guestbook');
const errorRoute = require('./routes/error');
const userApiRouter = require('./routes/user-api');
// Logging
const logger = require('./logging');



// Application Setup
const application = express()
    // 1. static serve(체인걸음)
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))

    // 2. session enviroment
    .use(session({
        secret: 'mysite-session', // 쿠키 변조를 방지하기 위한 값.
        resave: false,  // req.session.authUser= user (요청처리에서 세션이 변경 사항이 없어도 항상 저장)
        saveUninitialized: false    // 새로 세션을 생성할 때 "uninitialized" 상태로 둔다. 따라서 로그인 세션처리에서는 false로 해주면 좋다.
    }))

    // 3. request body parser
    .use(express.urlencoded({extended: true})) //application/x-www-form-urlencoded
    .use(express.json())                       //application/json

    // 4. view engine setup
    .set("views", path.join(__dirname, "views"))
    .set('view engine', 'ejs')

    // 5. request router
    .all('*', function(req,res, next){ // 모든 메소드의 url 설정
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', mainRouter) // < - 이부분에서 계속 추가
    .use('/user', userRouter) 
    .use('/api/user', userApiRouter) 
    
    .use('/guestbook', guestbookRouter)
 
    .use(errorRoute.error404) //404 에러처리
    .use(errorRoute.error500) //500 처리

// server setup
http.createServer(application)
    .on('listening', function(){
        logger.info(`Http Server running on port ${process.env.PORT}`);
    })
    .on('error', function(error){
        if(error.syscall != 'listen'){
            throw error;
        }
        switch(error.code){
            case 'EACCESS':
                logger.error(`Port: ${process.env.PORT} requires privileges`); //port를 열지 못햇을때
                process.exit(1); // 1번은 비정상종료
                break;
            case 'EADDRINUSE' :
                logger.error(`Port: ${process.env.PORT} is already in use`); //port를 이미 사용하고 있을때
                process.exit(1); 
                break;
            default:
                throw error;
        }
    })
    .listen(process.env.PORT);
