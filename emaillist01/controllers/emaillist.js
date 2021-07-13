const model = require("../models/emillist");

module.exports = {

    index: async function(req,res){
        const result = await model.findAll();
        res.render('index');
    },
    form: function(req,res){
        res.render('form');
    },
    add: function(req, res){
        console.log(req.body);

        res.redirect("/");
    }
}