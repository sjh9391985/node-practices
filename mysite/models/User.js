const {Sequelize, DataTypes, ENUM} = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('User', {
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(45),
            allowNull: false
        },
        gender: {
            field: 'gender',
            type: ENUM(['male','femail']),
            allowNull: false
        },
        role: {
            field: 'role',
            type: ENUM(['USER','ADMIN']),
            allowNull: true,
            defaultValue: 'USER'
        }
    },{
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createdAt: false, // table만든 시간을 알려주는것.
        updatedAt: false, //정보가 변경되었을때 변경된 컬럼을 만들것인지 물어보는것.
        tableName: 'user' // tableName을 무엇으로 할것인가? 설정하지 않는다면 정의된 객체의 이름으로 한다.
    })
}


