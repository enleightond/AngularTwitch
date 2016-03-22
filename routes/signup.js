var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

function Users() {
	return knex('users');
}

/* GET users listing. */
router.post('/signup', function(req, res, next) {
	console.log(req.body.user)
		if(req.body.user.password === req.body.confirm){
			bcrypt.genSalt(10, function(err, salt) {
				bcrypt.hash(req.body.user.password, salt, function(err, hash) {
					knex('users').insert({name: req.body.user.name, email: req.body.user.email, password: hash }).then(function(){
							res.redirect('/#/dashboard')
 		    		})
				}) 
			})
		}
		else if (req.body.password !== req.body.confirm){
			return "Password does not match!";
		}		 
		else (function(err) {
	    	console.error(err);
	    	res.status(400).send(err);
	    	res.redirect('/#/signup')
	})   		
});

module.exports = router;
