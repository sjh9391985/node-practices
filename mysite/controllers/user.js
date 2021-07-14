const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.

module.exports = {

    joinform: function(req, res){
        res.render('user/joinform');
    },

    join: async function(req, res){
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

    loginform: function(req, res){
        res.render('user/loginform');
    },

    login: async function(req, res){
        const user = await models.User.findOne(
            {
                attributes: ['no', 'name', 'role'],
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            }
        )
        if(user == null) {
            res.render('user/loginform',{
                email: req.body.email,
                result: 'fail'
            })
        }

        console.log(user);
        res.redirect('/')
    }
}