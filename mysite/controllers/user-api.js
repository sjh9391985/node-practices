const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.
const logger = require('../logging');

module.exports = {
    // 이메일 중복확인
    checkemail: async function(req, res) {
        const user = await models.User.findOne({
            attributes: ['no'],
            where: {
                email: req.query.email || ''
            }
        });
        res.send({
            result: "success",
            data: user !== null,
            message: null
        });
    }
}