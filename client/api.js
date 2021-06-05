const url = 'http://localhost:3000';

const headers = {
	mode: 'cors',
	cache: 'no-cache',
	credentials: 'same-origin',
	headers: {
		'Content-Type': 'application/json'
	},
}

async function login(email, password) {
	let response = await fetch(`${url}/login`,
		{
			...headers,
			method: 'POST',
			body: JSON.stringify({ email, password }),
		});

	document.cookie = await response.json();
}

async function reminders(key) {
	return await fetch(`${url}/api/reminders`,
		{
			...headers,
			method: 'GET',
			headers: {
				'authorization': key
			}
		}
	).json();
}
