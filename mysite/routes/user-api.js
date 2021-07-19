// express import
const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/user-api');

const Router = express.Router();

// email 중복확인
Router.route('/checkemail').get(controller.checkemail);

Router.route('/needauth').get(authorized, function(res, req){
    res.send({
        result : "success"
    })
});

Router.route('/error').get(function(res, req, next){

    try{
        throw new Error('Broken');
    }catch(e){
        next(e)
    }
    
});

module.exports = Router;