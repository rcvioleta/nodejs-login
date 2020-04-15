const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const User = require('../models/user');

router.get('/', async (req, res, next) => {
	if (req.user) return res.redirect('/home');
	res.render('index');
});

router.get('/home', auth, async (req, res, next) => {
	try {
		const user = await User.findById(req.user);
		res.render('home', {
			name: user.name,
			message: 'Welcome to our home page'
		});
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
