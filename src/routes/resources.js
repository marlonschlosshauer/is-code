const router = require('express').Router();
const { v4: uuid } = require('uuid');
const { reminders } = require('../storage');
const verify = require('./verify');

router.get('/reminders', verify, (req, res) => {
	res.status(200).send(reminders.find());
});

router.get('/reminders:id', verify, (req, res) => {
	res.status(200).send(reminders.findOne({ id: req.params.id }));
});

router.post('/reminders', verify, (req, res) => {
	const id = uuid();
	reminders.insert({ ...req.body, id });
	res.status(200).send(`Successfully added reminder with id ${id}`)
});

module.exports = router;
