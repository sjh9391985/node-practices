# Mysite on Node(Express)

## 설치 패키지
$ npm init -y<br>

$ npm i express<br>
$ npm i express-session<br>
$ npm i serve-favicon<br>
$ npm i ejs<br>
$ npm i dotenv<br>
$ npm i sequelize<br>
$ npm i mysql2<br>
$ npm i multer<br>
$ npm i moment<br>
$ npm i winston<br>
$ npm i winston-daily-rotate-file<br>

$ npm i -D nodemon<br>
$ npm i -D mocha<br>
$ npm i -D chai<br>

## script in package.json setting
''' JSON '''

''' 
    "scripts": 
    {
    "start": "node index.js",
    "test": "npx mocha",
    "debug": "nodemon index.js"
    }

## project structure [project 구조는 개발자의 자유]
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- [node_modules]
    |--- test
    |--- logging
    |--- [logs]
    |       |--- [error]
    |--- [multer-temporary-store]
    |--- config
    |--- public
    |       |--- assets
    |               |--- js
    |               |--- css
    |               |--- images
    |               |--- [upload-images]
    |--- routes
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
            |--- main
            |--- admin
            |       |--- includes
            |--- user
            |--- board
            |--- guestbook
            |--- gallery
            |--- includes
</pre>