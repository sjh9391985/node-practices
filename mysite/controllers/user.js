const models = require('../models'); //이렇게 설정하면 models 의 디렉토리의 index.js만 실행이 된다.

module.exports = {

    joinform: function(req, res){
        res.render('user/joinform');
    },

    join: async function(req, res){
        // await User.create(
        //     { 
        //     firstName: "Jane", 
        //     lastName: "Doe" 
        //     }
        // );
        res.redirect('/user/joinsuccess')
    },

    joinsuccess: function(req, res){
        res.render('user/joinsuccess');
    }
}