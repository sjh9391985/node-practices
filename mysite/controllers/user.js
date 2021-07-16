const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.

module.exports = {
    /* 회원가입 */
    join: function(req, res){
        res.render('user/joinform');
    },

    _join: async function(req, res, next){
        try{
        const result = await models.User.create(
            {  
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender
            }
        );
        console.log(result);
        res.redirect('/user/joinsuccess')
        }catch(err){
            next(err);
        }
    },

    joinsuccess: function(req, res){
        res.render('user/joinsuccess');
    },
    /* 회원가입 END */

    /* 로그인 */
    login: function(req, res, next){
        try{
        res.render('user/loginform');
        }catch(e){
            next(e);
        }    
    },

    _login: async function(req, res, next){
        try{
        const user = await models.User.findOne(
            {
                attributes: ['no', 'name', 'role'],
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            });

            if(user == null) {               // 여러 객체를 나열해야할때.
                res.render('user/loginform', Object.assign(req.body, {
                    result: 'fail',
                    password: ''
                }));
                return ;
        }

        // LOGIN 처리
        req.session.authUser = user;
        console.log(user);
        res.redirect('/')
        } catch(e){
            next(e)
        }
    },
    /* 로그인 END */

    /* 로그아웃 */
    logout: async function(req, res, next){
        try{
        await req.session.destroy();
        res.redirect('/')
        }catch(e){
            next(e)
        }
    },
    /* 로그아웃 END */

    /* 회원정보 수정 */
    update: async function(req, res, next) {
        try {
            const user = await models.User.findOne({
                attributes: ['no', 'email', 'name', 'gender'],
                where: {
                    no: req.session.authUser.no
                }
            });
            res.render("user/update", { user });
        } catch(e) {
            next(e);
        }
    },
    _update: async function(req, res, next) {
        try {
            const {[req.body.password == '' ? 'password' : '']: remove, ...updateObject} = req.body;
            await models.User.update(updateObject, {
                where: {
                    no: req.session.authUser.no    
                }
            });
            res.redirect("/user/update");
        } catch(err) {
            next(err);
        }    
    }
    /* 회원정보 수정 END */


}