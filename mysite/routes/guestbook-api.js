// express import
const express = require('express');
const controller = require('../controllers/guestbook-api');

const Router = express.Router();

// email 중복확인
Router.route('').get(controller.read);
Router.route('/:no').delete(controller.delete);
Router.route('').post(controller.create);

module.exports = Router;