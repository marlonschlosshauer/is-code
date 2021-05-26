require('dotenv').config()
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const token = req.header('authorization');
	if (!token) return res.status(401).send('No token found');

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	} catch (err) {
		return res.status(400).send('Invalid token')
	}
}
