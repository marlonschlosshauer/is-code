require('dotenv').config()

const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');

const { users } = require('../storage');

const auth = (req, res, next) => {
	if (req.body?.email && req.body.password) {
		next();
	} else {
		return res.status(400).send('Email and password are required');
	}
}

router.post('/register', auth, (req, res) => {
	if (users.findOne({ email: req.body.email })) return res.status(400).send(`User with ${req.body.email} already exists`);

	const id = uuid();
	users.insert({ ...req.body, id })
	res.status(200).send(`Added user width id ${id}`);
})

router.post('/login', auth, (req, res) => {
	// Finde Nutzer
	const user = users.findOne({ email: req.body.email });
	// Existiert Nutzer?
	if (!user) return res.status(400).send(`No user with ${req.body.email} exists`);
	// Korrektes Passwort?
	if (user.password != req.body.password) return res.status(400).send(`Incorrect password for ${req.body.email}`);

	// Erstelle Token
	const token = jwt.sign({ _id: req.body.email }, process.env.TOKEN_SECRET)

	// Antworte mit Token in Body
	res.header('authorization', token)
		.status(200)
		.send({ token, message: `Successfully logged in as ${req.body.email}` });
})

module.exports = router;
