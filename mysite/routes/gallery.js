const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/gallery');

const Router = express.Router();
Router.route('').get(controller.index);
Router.route('/upload').post(authorized('ADMIN'), controller.upload);
Router.route('/delete/:no').get(authorized('ADMIN'), controller.delete);

module.exports = Router;
