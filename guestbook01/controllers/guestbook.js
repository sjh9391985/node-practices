const model = require('../models/guestbook')

module.exports = {

    index: async function(req,res){
        const result = await model.findAll();
        res.render('index',{
            list: result || []
        });
    },

    add: async function(req,res){
        const result = await model.insert(req.body);
        res.redirect("/");
    },

    deleteform: function(req, res){
        res.render('deleteform', {
            no: req.params.no
        });
        console.log(req.params.no);
    },

    delete: async function(req, res, next){
        const result = await model.delete(req.body);
        console.log(req.body);
        res.redirect("/");
    }
}