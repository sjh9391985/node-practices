// express import
const express = require('express');

const controller = require('../controllers/guestbook');


const Router = express.Router();

Router.route('/').get(controller.index);

Router.route('/add').post(controller._add);

Router.route('/delete/:no').get(controller.deleteform);

Router.route('/delete').post(controller._delete);

module.exports = Router;