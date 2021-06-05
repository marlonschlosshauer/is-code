const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const passport = require('passport')
const app = express();
const auth = require('./routes/auth');
const resources = require('./routes/resources');

const port = 3000;

app.use(cors());
app.use(bodyparser.json())
app.use('/', auth);
app.use('/api', resources);

app.get('/auth/github',
	passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	function(req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	});

app.listen(port, () => console.log(`Server running on port ${port}`));

