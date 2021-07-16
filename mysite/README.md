# Mysite on Node(Express)

## 설치 패키지
$ npm init -y<br>
$ npm i express<br>
$ npm i express-session<br>
$ npm i ejs<br>
$ npm i dotenv<br>
$ npm i sequelize<br>
$ npm i mysql2<br>
$ npm i multer<br>
$ npm i moment<br>
$ npm i winston<br>
$ npm i winston-daily-rotate-file<br>
$ npm i -D nodemon<br>

## script in package.json setting
''' JSON '''

''' 
    "scripts": 
    {
    "start" : "node index.js",
    "debug" : "nodemon index.js"
    }

## project structure [project 구조는 개발자의 자유]
<pre>
/mysite
    |---- index.js
    |---- pacakge.json
    |---- package-lock.json
    |---- /node-modules
    |---- /config
    |---- /public
              |--- /assets
                       |--- /css
                       |--- /js
                       |--- /image
                       |--- /gallery
    |---- /routes
    |---- /controllers
    |---- /logging
    |---- /logs
    |---- /multer-temporary-store
    |---- /models
    |---- /views
            |---- /main
            |---- /user
            |---- /guestbook
            |---- /board
            |---- /gallery
            |---- /admin
            |---- /error
</pre>