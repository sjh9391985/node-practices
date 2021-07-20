const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.
const moment = require('moment')

module.exports = {
    /* 게시판 화면 */
    index: async function(req, res, next){
        try { 
            const results = await models.Board.findAll({
                attributes: ['no', 'title','hit', 'regDate']  ,
                order: [
                    ['no', 'DESC']
                ]              
            });
            res.render('board/list', 
                {
                    board: results,
                    moment: moment
                }
            )
        }catch(e){
            next(e);
        }
    },
    /* 게시판 화면 END */

    /* 게시판 글 삭제 */
    delete: async function(req, res,next){
        try{
            const results = await models.Board.destroy(
                {
                    where: {no: req.params.no}
                }
                )
            res.redirect('/board');
        }catch(e){
            next(e);
        }
    },
    /* 게시판 글 삭제 END */

    /* 게시판 글 작성하기 */
    write: function(req, res){
        res.render('board/write')
    },

    _write: async function(req, res, next){
        try{
            await models.Board.create({
                title: req.body.title,
                contents: req.body.contents,
                groupNo: req.body.groupNo,
                orderNo: req.body.orderNo,
                userNo: req.session.authUser,
                regDate: req.body.regDate,
                hit: 0
            });
            console.log(req.body.regDate);
            res.redirect('/board');
        }catch(e){
            next(e);
        }
    },
    /* 게시판 글 작성하기 END*/

    /* 게시판 글 내용 보기 */
    view: async function(req, res, next){
        try { 
            const results = await models.Board.findOne({
                attributes: ['no', 'title','contents'],
                where:{
                    no: req.params.no
                }
            });
            res.render('board/view', {
                view: results
            })
        }catch(e){
            next(e);
        }
    },
    /* 게시판 글 내용 보기 END*/
    
    /* 게시판 글 수정화면*/
    _update: async function(req, res, next){
        try { 
            const modi = await models.Board.findOne({
                attributes: ['no', 'title','contents'],
                where:{
                    no: req.params.no
                }
            });
            res.render('board/modify', {modi})
        }catch(e){
            next(e);
        }
    },
    /* 게시판 글 수정화면 END*/

    /* 게시판 글 수정하기 */
    update: async function(req, res, next){
        try{
            await models.Board.update( {
                title: req.body.title,
                contents: req.body.contents
            },  {
                where: { no: req.params.no  }
                }
            );
            res.redirect('/board')
        }catch(e){
            next(e)
        }
    }

   
    /* 게시판 글 수정하기 END */

}