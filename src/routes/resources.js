const router = require('express').Router();
const storage = require('../storage');
const verify = require('./verify');

router.get('/users', verify, (req, res) => {
	res.status(200).send(storage.all());
});

router.get('/', (req, res) => {
	res.send('Schön hier');
});

module.exports = router;
