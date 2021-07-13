// express import
const express = require('express');

const controller = require('../controllers/emaillist');


const Router = express.Router();

Router.route('').get(controller.index);

Router.route('/add').get(controller.form);

Router.route('/add').post(controller.add);

module.exports = Router;