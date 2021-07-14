// express import
const express = require('express');

const controller = require('../controllers/user');

const Router = express.Router();

Router.route('/join').get(controller.joinform);

Router.route('/join').post(controller.join);

Router.route('/joinsuccess').get(controller.joinsuccess);

Router.route('/login').get(controller.loginform);

Router.route('/login').post(controller.login);


module.exports = Router;