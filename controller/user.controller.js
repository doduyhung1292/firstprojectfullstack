var db = require('../db');
var shortid = require('shortid');


module.exports.index = function(req, res){
	res.render('user/index', {
		users : db.get('users').value()
	});
};
module.exports.search = function(req, res){
	var q = req.query.q;
	var matchUser = db.get('users').value().filter(function (user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('user/index', {
       users: matchUser
	});
};
module.exports.view = function(req, res){
	var id = req.params.id;
	var user = db.get('users').find({id: id}).value();
	res.render('user/viewuser.pug', {
		user: user
	});
};
module.exports.post =function(req, res) {
    res.render('./user/create')
};
module.exports.get = function(req, res) {
    res.render('./user/create')
}

module.exports.postCreate = function(req, res){
	req.body.id = shortid.generate();
	console.log(req.body);
	req.body.avata = req.file.path.split('/').slice(1).join('/');
	db.get('users').push(req.body).write();
	res.redirect('/user');

}
//render product
module.exports.product = function(req, res){
	res.render('./product', {
		products : db.get('products').value()
	});
};
