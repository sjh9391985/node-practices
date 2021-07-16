const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.
const moment = require('moment')

module.exports = {
    /* 게시판 화면 */
    index: async function(req,res, next){
        try { 
        // const result = await models.Guestbook.findAll({
        //     attributes: ['no', 'title', 'password', 'message', 'regDate'],
        //     order: [
        //         ['no', 'DESC']
        //     ]
        // })
        res.render('board/list', {
            // list: result,
            // moment : moment
        })
        }catch(e){
            next(e);
        }
    },
    /* 방명록 화면 END */

    
}