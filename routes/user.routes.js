var express = require('express');
var router = express.Router();
var shortid = require('shortid');
var controller = require('../controller/user.controller')

var db = require('../db');

// render

router.get('/', controller.index);
// search
router.get('/search', controller.search);
// view user
router.get('/view/:id', controller.view);

// post
router.get('/create', controller.get);
router.post('/create', controller.postCreate);


module.exports = router;
