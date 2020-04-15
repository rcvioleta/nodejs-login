const express = require('express');

const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// model
const User = require('../models/user');

const router = express.Router();

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL: process.env.FACEBOOK_CALLBACK_URL
		},
		async (accessToken, refreshToken, profile, done) => {
			const user = await User.findOneOrCreate({
				name: profile.displayName,
				token: accessToken
			});
			done(null, user);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	done(null, id);
});

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect: '/home',
		failureRedirect: '/'
	})
);

router.get('/logout', async (req, res, next) => {
	try {
		req.logout();
		res.redirect('/');
	} catch (e) {
		res.render('home', {
			message: 'Please login in order to continue'
		});
	}
});

module.exports = router;
