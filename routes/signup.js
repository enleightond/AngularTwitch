var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function Users() {
	return knex('users');
}

/* GET users listing. */
router.get('/signup', function(req, res, next) {
	console.log(req.body);
  res.send('respond with a resource');
});

router.post('/signup', function (req, res) {
	
	if(req.body.password === req.body.confirm){
		
		bcrypt.genSalt(10, function(err, salt) {

		    bcrypt.hash(req.body.password, salt, function(err, hash) {
		    	knex('users').insert({name: req.body.name, email: req.body.email, password: hash }).then(function(){
		    	})		
			}) 
		})
	} 
	else if (req.body.password !== req.body.confirm){
		return "Passwords does not match!";
	}

	else if (!req.body) {
		return res.sendStatus(400)
		}		
		  res.redirect('/dashboard')
	
	
});

module.exports = router;
