// express import
const express = require('express');

const controller = require('../controllers/main');


const Router = express.Router();

Router.route('').get(controller.index);

module.exports = Router;