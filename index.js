require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var cookieParser = require('cookie-parser')

var app = express();

var userRountes = require('./routes/user.routes');
var authRoute = require('./routes/auth.routes');
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('process.env.SESSION_SECRET'));

app.get('/', function(req, res){
	res.render('index', { name: "Hung"})
});

app.use('/user', userRountes);
app.use('/auth', authRoute);

app.listen(port, function(req, res){
	console.log('server started on port:' + port)
});