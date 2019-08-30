var shortId = require('shortid');


module.exports = function (req, res) {
	if (!req.signedCookies.sessionId) {
		var sessionId = shortId.generate();
		res.cookie('sessionId', shortId.generate(),{
			signed: true
		})
		db.get('sessions').push({
			id: sessionId
		}).write();
	}
	next()
}