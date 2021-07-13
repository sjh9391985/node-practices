const mysql = require('mysql');

module.exports = function(){
const conn = mysql.createConnection({
    host: '192.168.80.114',
    port: 3307,
    user: 'webdb',
    password: 'webdb',
    database: 'webdb'
})
    return conn;
}