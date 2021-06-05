require('dotenv').config()

const router = require('express').Router();

const passport = require('passport')
const Github = require('passport-github2').Strategy;


passport.use(new Github({
	clientID: process.env.GITHUB_CLIENT,
	clientSecret: process.env.GITHUB_SECRET,
	callbackURL: "http://localhost:3000/auth/github/callback"
},
	function(accessToken, refreshToken, profile, done) {
		console.log(profile);
		done(null, profile);
	}
));

router.get('/',
	passport.authenticate('github', { scope: ['user:email'] }));

router.get('/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	function(req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	});


module.exports = router;
