const model = require("../models/emillist");

module.exports = {

    index: async function(req,res){
        const result = await model.findAll();
        res.render('index', {
            list: result || []
        });
    },
    form: function(req,res){
        res.render('form');
    },
    add: async function(req, res){
        const result = await model.insert(req.body);
        console.log(result);

        res.redirect("/");
    }
}