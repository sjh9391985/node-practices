// express import
const express = require('express');

const controller = require('../controllers/user');

const Router = express.Router();

Router.route('/join').get(controller.joinform);

Router.route('/join').post(controller.join);

Router.route('/joinsuccess').get(controller.joinsuccess);

module.exports = Router;