const logger = require('../logging');

module.exports = {
    error404: (req, res) => { // url이 해당되지 않는것들은 404 Error page 처리
        res.render('error/404');
    },

    error500: (error, req, res, next)=>{
        // 로깅 처리
        // err.name, err.message, err.stack
        looger.error(err.stack);

        // 사과페이지
        res.status(500).render('error/500');
        res.status(500).send(`<pre>${err.stack}</pre>`);
    }
}