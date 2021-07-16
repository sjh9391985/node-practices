const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.
const moment = require('moment')

module.exports = {
    /* 방명록 화면 */
    index: async function(req,res, next){
        try { 
        const result = await models.Guestbook.findAll({
            attributes: ['no', 'name', 'password', 'message', 'regDate'],
            order: [
                ['no', 'DESC']
            ]
        })
        res.render('guestbook/list', {
            list: result,
            moment : moment
        })
        }catch(e){
            next(e);
        }
    },
    /* 방명록 화면 END */

    /* 방명록 글 추가 */
    _add: async function(req,res,next){
        try{
        const result = await models.Guestbook.create(
            {   
                name: req.body.name,
                password: req.body.password,
                message: req.body.message
            }
        )
        console.log(result);
        res.redirect("/guestbook");
        }catch(e){
            next(e);
        }
    },
    /* 방명록 글 추가 END */    
  
    /* 방명록 글 삭제 */
    deleteform: function(req, res){
        console.log("deleteform!!");
        res.render('guestbook/deleteform', {
            no: req.params.no
        });
    },

    _delete: async function(req, res, next){
        try{
        const result = await models.Guestbook.destroy({
            where:{
            no: req.body.no,
            password: req.body.password
        }
        });
        console.log(req.body);
        //const result = await model.delete(req.body);
        //console.log(req.body);
        res.redirect("/guestbook");
        }catch(e){
            next(e)
        }
    },
    /* 방명록 글 삭제 END */

    spa: async function(req,res, next){
        try { 
        const result = await models.Guestbook.findAll({
            attributes: ['no', 'name', 'password', 'message', 'regDate'],
            order: [
                ['no', 'DESC']
            ]
        })
        res.render('guestbook/spa-landing', {
            list: result,
            moment : moment
        })
        }catch(e){
            next(e);
        }
    }
}