const router = require('express').Router();

router.post('/register', (req, res) => {
	if (req.body?.email && req.body.password) {
		res.status(200).send();
	} else {
		res.status(400).send('email and password are required');
	}
})

router.post('/login', (req, res) => {
	if (req.body?.email && req.body.password) {
		res.status(200).send();
	} else {
		res.status(400).send('email and password are required');
	}

	res.status(400).send();
})

router.get('/', (req, res) => {
	res.send('Schön hier');
});

module.exports = router;

