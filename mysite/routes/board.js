const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/board');

const Router = express.Router();
Router.route('').get( controller.index);

Router.route('/delete/:no').get(authorized(), controller.delete);

Router.route('/writeform').get(authorized(), controller.write);
Router.route('/write').post(controller._write);

Router.route('/view/:no').get(controller.view);

Router.route('/view/update/:no').get(authorized(), controller._update);
Router.route('/view/update').post(authorized(),controller.update);


module.exports = Router;