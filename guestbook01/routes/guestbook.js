// express import
const express = require('express');

const controller = require('../controllers/guestbook');


const Router = express.Router();

Router.route('').get(controller.index);

Router.route('/add').post(controller.add);

Router.route('/delete/:no').get(controller.deleteform);

Router.route('/delete').post(controller.delete);

module.exports = Router;