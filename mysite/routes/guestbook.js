// express import
const express = require('express');
const controller = require('../controllers/guestbook');


const Router = express.Router();

// 방명록 화면
Router.route('/').get(controller.index);

Router.route('/spa').get(controller.spa);

// 방명록 추가(번호, 이름, 비밀번호, 내용)
Router.route('/add').post(controller._add);

// 방명록 글 삭제
Router.route('/delete/:no').get(controller.deleteform);
Router.route('/delete').post(controller._delete);

module.exports = Router;