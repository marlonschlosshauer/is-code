const router = require('express').Router();

router.get('/login', (req, res) => {
	res.sendFile(`${process.cwd()}/public/login.html`);
})

router.get('/', (req, res) => {
	res.send('hello :)');
})

module.exports = router;
