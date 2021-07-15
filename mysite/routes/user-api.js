// express import
const express = require('express');
const auth = require('./auth')
const controller = require('../controllers/user-api');

const Router = express.Router();

// email 중복확인
Router.route('/checkemail').get(controller.checkemail);

Router.route('/needauth').get(auth, function(res, req){
    res.send({
        result : "success"
    })
});

module.exports = Router;