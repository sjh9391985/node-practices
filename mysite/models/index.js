const {Sequelize, DataTypes, ENUM} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
);

const User = require('./User')(sequelize);

User.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true', // DB를 항상 새롭게 만든다.
    alter: process.env.TABLE_ALTER_SYNC === "true" // debug 할땐 true, 개발이 완료 되었을땐 false로 작업을 해주면 된다.
});

module.exports = { User }