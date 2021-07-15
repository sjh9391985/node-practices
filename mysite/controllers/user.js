const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.

module.exports = {

    join: function(req, res){
        res.render('user/joinform');
    },

    _join: async function(req, res){
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
    },

    joinsuccess: function(req, res){
        res.render('user/joinsuccess');
    },

    login: function(req, res){
        res.render('user/loginform');
    },

    _login: async function(req, res){
        const user = await models.User.findOne(
            {
                attributes: ['no', 'name', 'role'],
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            }
        )
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
    },

    logout: async function(req,res){
        await req.session.destroy();
        res.redirect('/')
    },

    update: function(req, res){
        //req.session.authUser.no
        res.redirect('/')
    },

    _update: function(req, res){
        //req.session.authUser.no
        res.redirect('/')
    }


}