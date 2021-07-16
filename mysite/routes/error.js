const logger = require('../logging');

module.exports = {
    error404: (req, res) => { // url이 해당되지 않는것들은 404 Error page 처리
        if(req.accepts('html')){
            res.status(404).render('error/404')
            return;
        }
        
        res.status(400).send({
            result: 'fail',
            data: null,
            message: 'Unknown Request'
        })
    },

    error500: (err, req, res, next) => {
        // 로깅 처리
        // err.name, err.message, err.stack
        logger.error(err.stack);

        // 응답페이지
        if(req.accepts('html')){
            res.status(500).send(`<pre>${err.stack}</pre>`);
            return;
        }
        res.status(500).send({
            result: 'fail',
            data: null,
            message: err.stack
        })
     
    }
}