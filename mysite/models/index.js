const {Sequelize, DataTypes, ENUM} = require('sequelize');

const sequelize = new Sequelize(
    'webdb','webdb','webdb',
    {
        host: '192.168.80.114',
        port: 3307,
        dialect: 'mysql'
    }
);

const User = require('./User')(sequelize);

User.sync({
    force: false,
    alter: true // debug 할땐 true, 개발이 완료 되었을땐 false로 작업을 해주면 된다.
});

module.exports = { User }