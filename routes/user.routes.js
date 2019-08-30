var express = require('express');
var multer = require('multer');
var router = express.Router();
var shortid = require('shortid');
var controller = require('../controller/user.controller')
var validate = require('../validate/user.validate');
var authMiddleware = require('../middleware/auth.middleware');
var db = require('../db');
var cookieParser = require('cookie-parser');


var upload = multer({dest: './public/uploads/'});
// render

router.get('/',authMiddleware.requireAuth, controller.index);
// search
router.get('/search', controller.search);
// view user
router.get('/view/:id', controller.view);
// render product
router.get('/product', controller.product);
// post
router.get('/create', controller.get);
router.post('/create',
 upload.single('avata'),
 validate.postCreate, 
 controller.postCreate);


module.exports = router;
