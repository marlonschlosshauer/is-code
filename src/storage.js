const storage = {
	db: {},
	check: (keyword) => (storage.db[keyword] ?? []),
	add: (user) => storage.db['users'] = [...storage.check('users'), user],
	nth: (n) => storage.check('users')[n],
	all: () => storage.check('users'),
};

module.exports = storage;
