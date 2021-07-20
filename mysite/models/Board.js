const {Sequelize, DataTypes, ENUM} = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('Board', {
        no: {
            field: 'no',
            type: DataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            field: 'title',
            type: DataTypes.STRING(200),
            allowNull: false
        },
        contents: {
            field: 'contents',
            type: DataTypes.TEXT,
            allowNull: false
        },
        regDate: {
            field: 'reg_date',
            type: DataTypes.DATE,
            allowNull: true
        },
        hit: {
            filed: 'hit',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        groupNo: {
            filed: 'group_no',
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        orderNo: {
            filed: 'order_no',
            type: DataTypes.BIGINT(11),
            allowNull: false
        },       
        depth: {
            filed: 'depth',
            type: DataTypes.BIGINT(11),
            allowNull: false
        }
    },{
        underscored: true,
        freezeTableName: true,
        timestamps: true,
        createdAt: false, // table만든 시간을 알려주는것.
        updatedAt: false, //정보가 변경되었을때 변경된 컬럼을 만들것인지 물어보는것.
        tableName: 'board' // tableName을 무엇으로 할것인가? 설정하지 않는다면 정의된 객체의 이름으로 한다.
    })
}


