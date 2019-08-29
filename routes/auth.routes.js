var express = require('express');
var router = express.Router();
var controller = require('../controller/user.controller')

router.get('/login', controller.login);
module.exports = router;