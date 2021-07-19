const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.
const { Op } = require("sequelize");

module.exports = {

    create: async (req, res, next) => {
        try {   
            const result = await models.Guestbook.create(req.body);
            res.send({
                result: 'success',
                data: result,
                message: null
            });
        } catch(err){
            next(err);
        }
    },

    read: async (req, res, next) => {
        try {
            const startNo = req.query.sno || 0;
            const results = await models.Guestbook.findAll({
                attributes: ['no', 'name', 'message'],
                where: (startNo > 0) ? {no: {[Op.lt]: startNo}} : {},
                order: [
                    ['no', 'desc']
                ],
                limit: 3
            });

            res.send({
                result: 'success',
                data: results,
                message: null
            });
        } catch(err){
          next(err);
        }       
    },

    delete: async (req, res, next) => {
        try {
            const result = await models.Guestbook.destroy({
                where: {
                    [Op.and]: [{no: req.params.no}, {password: req.body.password}]
                }
            });
            res.send({
                result: 'success',
                data: req.params.no,
                message: null
            });
        } catch(err){
            next(err);
        }
    }
}