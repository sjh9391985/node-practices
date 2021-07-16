const express = require('express');
const auth = require('./auth');
const controller = require('../controllers/board');

const Router = express.Router();
Router.route('').get(controller.index);


module.exports = Router;