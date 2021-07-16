const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.

module.exports = {

    create: async (req, res, next) => {
        console.log(req.body);
        // sql insert
        res.status(200).send({
            result: 'success',
            data: Object.assign(req.body, {
                no: 10,
                password: '',
                regDate: new Date()
            }),
            message: 'null'
        })
    },

    read: async (req, res, next) => {
        const startNo = req.query.sno || 0;
        console.log(startNo);

        res.status(200).send({
            result: 'success',
            data:[{
                no: 9,
                name: '둘리',
                message: "호이~",
                regDate: new Date()
            }, {
                no: 10,
                name: '또치',
                message: "또치~",
                regDate: new Date()
            }, {
                no: 11,
                name: '마이콜',
                message: "마이콜~",
                regDate: new Date()
            }]
        })
    },

    delete: async (req, res, next) => {
        console.log(req.params.no + req.body.password);
        
        //sql delete
        res.status(200).send({
            result: 'success',
            data: req.params.no,
            message: null
        })
    }
}