const url = 'http://localhost:3000';

const options = {
	mode: 'cors',
	cache: 'no-cache',
	credentials: 'same-origin',
	headers: {
		'Content-Type': 'application/json'
	},
}

async function login(email, password) {
	const request = await fetch(`${url}/login`,
		{
			...options,
			method: 'POST',
			body: JSON.stringify({ email, password }),
		});

	const response = await request.json();
	return response.token;
}

async function reminders(key) {
	return await fetch(`${url}/api/reminders`,
		{
			...options,
			method: 'GET',
			headers: {
				'authorization': key
			}
		}
	);
}
