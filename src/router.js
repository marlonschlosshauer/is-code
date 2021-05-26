require('dotenv').config()
const router = require('express').Router();
const jwt = require('jsonwebtoken');

const storage = require('./storage');

const verify = (req, res, next) => {
	const token = req.header('authorization');
	if (!token) return res.status(401).send('No token found, access denied');

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	} catch (err) {
		return res.status(400).send('Invalid token')
	}
}

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

router.get('/users', verify, (req, res) => {
	res.status(200).send(storage.all());
});

router.get('/', (req, res) => {
	res.send('Schön hier');
});

module.exports = router;

