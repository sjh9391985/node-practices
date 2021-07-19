// express import
const express = require('express');
const authorized = require('./authorized')
const controller = require('../controllers/user');

const Router = express.Router();
/* 
    get방식: name <- 작성
    post방식: _name <- 작성
*/

// 회원가입
Router.route('/join').get(controller.join);
Router.route('/join').post(controller._join);

// 회원가입 성공
Router.route('/joinsuccess').get(controller.joinsuccess);

// 로그인
Router.route('/login').get(controller.login);
Router.route('/login').post(controller._login);

// 로그아웃
Router.route('/logout').get(controller.logout);

// 회원정보 수정
Router.route('/update').get(authorized(), controller.update);
Router.route('/update').post(authorized(), controller._update);

module.exports = Router;