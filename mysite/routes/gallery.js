  const express = require('express');
const auth = require('./auth');
const controller = require('../controllers/gallery');

const Router = express.Router();
Router.route('').get(controller.index);
Router.route('/upload').post(auth('ADMIN'), controller.upload);
Router.route('/delete/:no').get(auth('ADMIN'), controller.delete);

module.exports = Router;
