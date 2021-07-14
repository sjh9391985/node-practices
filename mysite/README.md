# Mysite on Node(Express)

## 설치 패키지
$ npm init -y
$ npm i express
$ npm i ejs
$ npm i -D nodemon

## script in package.json setting
''' JSON

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
    |---- /routes
    |---- /controllers
    |---- /models
    |---- /views
            |---- /main
            |---- /user
            |---- /guestbook
            |---- /board
            |---- /gallery
            |---- /admin
</pre>