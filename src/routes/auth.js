require('dotenv').config()

const router = require('express').Router();
const verify = require('./verify');
const jwt = require('jsonwebtoken');

const storage = require('../storage');

router.post('/register', (req, res) => {
	if (req.body?.email && req.body.password) {
		storage.add(req.body);
		res.status(200).send(`Added ${req.body.email}`);
	} else {
		res.status(400).send('email and password are required');
	}
})

router.post('/login', (req, res) => {
	if (req.body?.email && req.body.password) {
		const token = jwt.sign({ _id: req.body.email }, process.env.TOKEN_SECRET)
		res.header('authorization', token).status(200).send({ token, message: `Successfully logged in as ${req.body.email}` });
	} else {
		res.status(400).send('email and password are required');
	}

	res.status(400).send();
})

module.exports = router;
