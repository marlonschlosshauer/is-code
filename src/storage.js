const loki = require('lokijs');

const db = new loki('oauth.db');
const users = db.addCollection('users');
const reminders = db.addCollection('reminders');

module.exports = {
	users,
	reminders,
};
